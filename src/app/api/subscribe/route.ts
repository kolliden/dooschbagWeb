import { Resend } from "resend";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }

const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Band Signup <noreply@resend.dev>",
      to: "" + process.env.CLIENT_EMAIL,
      subject: "New Mailing List Signup",
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
