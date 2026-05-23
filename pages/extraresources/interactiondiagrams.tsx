"use client";

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

export default function InteractionDiagramPage() {
  // Password Protection State
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  // Tool Inputs State
  const [fc, setFc] = useState(70);
  const [fy, setFy] = useState(420);
  const [rhoG, setRhoG] = useState(0.05735);
  const [gamma, setGamma] = useState(0.75);
  const [ns, setNs] = useState(4);

  // Output Metrics State
  const [metrics, setMetrics] = useState({ pMax: '--', pBal: '--', mBal: '--', mOrig: '--' });

  // Handle password submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Change "JabbourSecure2026" to whatever password you want to hand out
    if (password === "JabbourSecure2026") {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Access denied.');
    }
  };

  // Run calculation logic
  const runCalculation = () => {
    // Ensure Plotly is loaded globally from the script tag before running
    if (typeof window === 'undefined' || !(window as any).Plotly) return;

    if (ns < 2) return;

    const b = 400; 
    const h = 400;
    const Es = 200000;      
    const eps_cu = 0.003;
    const Ag = b * h;
    const As = rhoG * b * h;
    
    const N_total = 4 * (ns - 1);
    const As_top = (1/4 + 1/N_total) * As;
    const As_bot = (1/4 + 1/N_total) * As;
    const As_side_total = (1/2 - 2/N_total) * As;
    const N_side_layers = ns - 2; 
    let As_strip = N_side_layers > 0 ? As_side_total / N_side_layers : 0;

    const d = h * (1 + gamma) / 2;
    const dp = h * (1 - gamma) / 2;

    let beta1 = 0.85;
    if (fc > 28) {
        beta1 = 0.85 - 0.05 * (fc - 28) / 7;
        if (beta1 < 0.65) beta1 = 0.65;
    }

    let phi_Pn_vals: number[] = [];
    let phi_Mn_vals: number[] = [];
    let c_ratios: number[] = [];
    
    for(let r = 2.0; r >= 0.1; r -= 0.01) c_ratios.push(r);
    for(let r = 0.095; r >= 0; r -= 0.002) c_ratios.push(r);

    let balanced_P = 0, balanced_M = 0;
    let min_diff_balanced = Infinity;
    let pure_M_val = 0;
    let min_diff_pure_p = Infinity;
    const ey = fy / Es;

    for (let i = 0; i < c_ratios.length; i++) {
        let cr = c_ratios[i];
        let c = cr * h;
        let a = beta1 * c;
        if (a > h) a = h;

        let Cc = 0, Mc = 0;
        if (c > 0) {
            Cc = 0.85 * fc * b * a;
            Mc = Cc * (h/2 - a/2);
        }

        let es_top = (c !== 0) ? eps_cu * (c - dp) / c : -999;
        let fs_top = Math.max(Math.min(es_top * Es, fy), -fy);
        let Fs_top = As_top * fs_top;
        if (c > 0 && dp < a) Fs_top = As_top * (fs_top - 0.85 * fc);
        let Ms_top = Fs_top * (h/2 - dp);

        let es_bot = (c !== 0) ? eps_cu * (c - d) / c : 999; 
        let fs_bot = Math.max(Math.min(es_bot * Es, fy), -fy);
        let Fs_bot = As_bot * fs_bot;
        if (c > 0 && d < a) Fs_bot = As_bot * (fs_bot - 0.85 * fc);
        let Ms_bot = Fs_bot * (h/2 - d);

        let Fs_side = 0;
        let Ms_side = 0;
        if (N_side_layers > 0) {
            let dy = (d - dp) / (N_side_layers + 1);
            for (let j = 1; j <= N_side_layers; j++) {
                let y_depth = dp + j * dy;
                let es_i = (c !== 0) ? eps_cu * (c - y_depth) / c : 999;
                let fs_i = Math.max(Math.min(es_i * Es, fy), -fy);
                let F_i = As_strip * fs_i;
                if (c > 0 && y_depth < a) F_i = As_strip * (fs_i - 0.85 * fc);
                Fs_side += F_i;
                Ms_side += F_i * (h/2 - y_depth);
            }
        }

        let Pn = Cc + Fs_top + Fs_bot + Fs_side;
        let Mn = Mc + Ms_top + Ms_bot + Ms_side;

        let et = (c <= 0) ? 999 : eps_cu * (d - c) / c;
        let phi = 0.65;
        if (et <= ey) {
            phi = 0.65;
        } else if (et >= (ey + 0.003)) {
            phi = 0.90;
        } else {
            phi = 0.65 + 0.25 * (et - ey) / 0.003;
        }

        let normalized_P = phi * Pn / (b*h);
        let normalized_M = phi * Mn / (b*h*h);

        phi_Pn_vals.push(normalized_P);
        phi_Mn_vals.push(normalized_M);

        let diff_b = Math.abs(et - ey);
        if (diff_b < min_diff_balanced) {
            min_diff_balanced = diff_b;
            balanced_P = normalized_P;
            balanced_M = normalized_M;
        }

        let diff_p = Math.abs(normalized_P);
        if (diff_p < min_diff_pure_p) {
            min_diff_pure_p = diff_p;
            pure_M_val = normalized_M;
        }
    }

    let Pn_tension = -As * fy;
    phi_Pn_vals.push(0.9 * Pn_tension / (b*h));
    phi_Mn_vals.push(0);

    let Pn0 = 0.85 * fc * (Ag - As) + As * fy;
    let phi_Pn_max = 0.65 * 0.80 * Pn0 / (b*h);

    let final_x: number[] = [];
    let final_y: number[] = [];
    let addedCutoffPoint = false;

    for(let k = 0; k < phi_Pn_vals.length; k++) {                
        let px = phi_Mn_vals[k];
        let py = phi_Pn_vals[k];

        if (py <= phi_Pn_max) {
            if (k > 0 && phi_Pn_vals[k-1] > phi_Pn_max && !addedCutoffPoint) {
                let y1 = phi_Pn_vals[k-1];
                let y2 = py;
                let x1 = phi_Mn_vals[k-1];
                let x2 = px;
                let x_cutoff = x1 + (phi_Pn_max - y1) * (x2 - x1) / (y2 - y1);
                final_x.push(x_cutoff);
                final_y.push(phi_Pn_max);
                addedCutoffPoint = true;
            }
            final_x.push(px);
            final_y.push(py);
        }
    }

    // Update Dashboard Cards
    setMetrics({
      pMax: phi_Pn_max.toFixed(3) + " MPa",
      pBal: balanced_P.toFixed(3) + " MPa",
      mBal: balanced_M.toFixed(3) + " MPa",
      mOrig: pure_M_val.toFixed(3) + " MPa"
    });

    // Plotly Construction
    const traceCurve = {
      x: final_x,
      y: final_y,
      mode: 'lines',
      type: 'scatter',
      name: 'Interaction Curve',
      line: { color: '#2980b9', width: 3 }
    };

    const maxX = Math.max(...final_x);
    const traceMax = {
      x: [0, maxX * 1.1],
      y: [phi_Pn_max, phi_Pn_max],
      mode: 'lines',
      name: 'ΦPn,max',
      line: { color: '#e74c3c', width: 2, dash: 'dash' }
    };

    const eccTraces = [];
    for (let eh = 0.1; eh <= 1.0; eh += 0.1) {
      let x_end = maxX * 1.1;
      let y_end = x_end / eh;
      if (y_end > phi_Pn_max * 1.2) {
          y_end = phi_Pn_max * 1.2;
          x_end = y_end * eh;
      }
      eccTraces.push({
          x: [0, x_end],
          y: [0, y_end],
          mode: 'lines',
          type: 'scatter',
          showlegend: false,
          hoverinfo: 'none',
          line: { color: '#e2e8f0', width: 1, dash: 'dot' }
      });
    }

    const layout = {
      title: { text: '<b>Column Interaction Diagram</b>', font: { color: '#1e293b' } },
      xaxis: { title: 'ΦMn / (bh²) [MPa]', rangemode: 'tozero', zeroline: true, gridcolor: '#f1f5f9' },
      yaxis: { title: 'ΦPn / (bh) [MPa]', rangemode: 'tozero', zeroline: true, gridcolor: '#f1f5f9' },
      legend: { x: 1, xanchor: 'right', y: 1 },
      hovermode: 'closest',
      template: 'plotly_white',
      margin: { l: 60, r: 30, t: 60, b: 60 }
    };

    (window as any).Plotly.newPlot('interactionChart', [...eccTraces, traceMax, traceCurve], layout, { responsive: true });
  };

  // Re-calculate whenever inputs change or user logs in successfully
  useEffect(() => {
    if (isAuthenticated) {
      runCalculation();
    }
  }, [isAuthenticated, fc, fy, rhoG, gamma, ns]);

  // Gate Screen Renderer
  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', background: '#f8fafc', width: '100vw' }}>
        <form onSubmit={handleLogin} style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', width: '100%', maxWidth: '400px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>Engineering Tool Access</h2>
          <p style={{ margin: '0 0 20px 0', color: '#64748b', fontSize: '0.9rem' }}>This system component is password protected.</p>
          
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.85rem', color: '#475569' }}>Enter Access Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '15px', boxSizing: 'border-box', fontSize: '1rem' }}
            placeholder="••••••••"
          />
          {authError && <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: '-5px 0 15px 0' }}>{authError}</p>}
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#3498db', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>Unlock Tool</button>
        </form>
      </div>
    );
  }

  // Active Authenticated UI Layout
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', background: '#f8fafc', minHeight: '100vh', width: '100%', boxSizing: 'border-box' }}>
      {/* Plotly Script Delivery injection dependency hook */}
      <Script 
        src="https://cdn.plot.ly/plotly-2.27.0.min.js" 
        strategy="afterInteractive"
        onLoad={runCalculation}
      />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '25px' }}>
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Controls Card */}
          <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#1e293b', borderBottom: '2px solid #f1f5f9', paddingBottom: '8px' }}>Parameters</h3>
            
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>f&apos;c (MPa) - Concrete</label>
              <input type="number" value={fc} onChange={(e) => setFc(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}/>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>fy (MPa) - Steel</label>
              <input type="number" value={fy} onChange={(e) => setFy(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}/>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>ρg = As/(bh)</label>
              <input type="number" step="0.001" value={rhoG} onChange={(e) => setRhoG(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}/>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>γ = (d-d&apos;)/h</label>
              <input type="number" step="0.01" value={gamma} onChange={(e) => setGamma(parseFloat(e.target.value) || 0)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}/>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>Ns (Bars per side)</label>
              <input type="number" value={ns} onChange={(e) => setNs(parseInt(e.target.value) || 2)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}/>
            </div>
          </div>

          {/* Results Display Grid */}
          <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>Key Design Outputs</h3>
            <div style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Max Capacity:</span><span style={{ fontWeight: 'bold' }}>{metrics.pMax}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Balanced P:</span><span style={{ fontWeight: 'bold' }}>{metrics.pBal}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Balanced M:</span><span style={{ fontWeight: 'bold' }}>{metrics.mBal}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#64748b' }}>Pure Bending:</span><span style={{ fontWeight: 'bold' }}>{metrics.mOrig}</span></div>
            </div>
          </div>

        </div>

        {/* Dynamic Plotly Presentation Frame Canvas */}
        <div style={{ flexGrow: 1, minWidth: '450px', height: '600px', background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <div id="interactionChart" style={{ width: '100%', height: '100%' }}></div>
        </div>
      </div>
    </div>
  );
}