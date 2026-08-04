import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { name, email, phone, languages, skills, experience, coverLetter } =
    req.body;

  if (!name || !email || !phone || !languages || !skills || !coverLetter) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Career Application: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Languages: ${languages}
        Skills: ${skills}
        Tutoring Experience: ${experience || "N/A"}

        Cover Letter:
        ${coverLetter}
      `,
    });

    return res.status(200).json({ message: "Application sent successfully" });
  } catch (error) {
    console.error("❌ Career application email error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
