// File: components/SocialLinks.jsx

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/jabbour_tutoring_lb/",
  facebook: "https://www.facebook.com/profile.php?id=61592028136397",
  youtube: "https://www.youtube.com/@JabbourTutoring",
  twitter: "https://x.com/Jabbourtutoring",
  linkedin: "https://www.linkedin.com/company/108147552/",
};

const ICONS = {
  instagram: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.1C15.9 4 15 3.9 14 3.9c-2.4 0-4 1.46-4 4.15v2.25H7.4v3h2.6V21h3.5z" />
    </svg>
  ),
  youtube: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4s-3.8 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.2 7.5.2 7.5.2s3.8 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z" />
    </svg>
  ),
  twitter: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.3 3H21l-6.7 7.6L22.2 21h-6.1l-4.8-6.3L5.7 21H3l7.2-8.2L2 3h6.3l4.4 5.8L18.3 3zm-1.1 16.2h1.7L7.9 4.7H6.1l11.1 14.5z" />
    </svg>
  ),
  linkedin: (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V21h3.38V8.5zM5.25 3.5a2 2 0 100 4 2 2 0 000-4zM20.45 21h-3.37v-6.34c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V21H9.2V8.5h3.24v1.7h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.06 2.26 4.06 5.2V21z" />
    </svg>
  ),
};

export default function SocialLinks({ className = "", iconClassName = "w-5 h-5" }) {
  return (
    <div className={className}>
      {Object.entries(SOCIAL_LINKS).map(([name, href]) => {
        const Icon = ICONS[name];
        return (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name.charAt(0).toUpperCase() + name.slice(1)}
            className="inline-block hover:text-gold-500 transition-colors duration-200"
          >
            <Icon className={iconClassName} width="20" height="20" />
          </a>
        );
      })}
    </div>
  );
}
