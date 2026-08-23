import { Resend } from "resend";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const clientEmail = process.env.CLIENT_EMAIL;
  const senderEmail = process.env.RESEND_FROM || "Band Signup <noreply@resend.dev>";

  if (!resendApiKey || !clientEmail) {
    console.error("Missing email env vars:", {
      hasResendApiKey: !!resendApiKey,
      hasClientEmail: !!clientEmail,
    });
    return new Response(
      JSON.stringify({ error: "Email service is not configured on this deployment." }),
      { status: 500 },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: senderEmail,
      to: clientEmail,
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
    return new Response(
      JSON.stringify({ error: "Failed to send email. Check Resend config and sender verification." }),
      { status: 500 },
    );
  }
}
