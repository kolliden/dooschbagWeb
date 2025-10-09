import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }

  // Configure transporter (use environment variables for credentials)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Band Signup" <${process.env.SMTP_USER}>`,
      to: process.env.CLIENT_EMAIL, // your client email
      subject: "New Mailing List Signup",
      text: `New user signed up: ${email}`,
      html: `<p>New user signed up: <strong>${email}</strong></p>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Email send error:", error.message, error.stack);
  } else {
    console.error("Email send error:", error);
  }
  return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
}
}
