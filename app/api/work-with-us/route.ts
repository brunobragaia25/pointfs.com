import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, jobRole, email, phone, country, linkedin, interests } = body;

    if (!fullName || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const row = (label: string, value: string) => value ? `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:40%;">
          <span style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;">${label}</span>
        </td>
        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
          <span style="font-size:15px;color:#032E5B;font-weight:500;">${value}</span>
        </td>
      </tr>` : "";

    await resend.emails.send({
      from: "Point Freight Systems <onboarding@resend.dev>",
      to: ["info@pointfs.com"],
      reply_to: email,
      subject: `New Job Application from ${fullName}`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;">
          <div style="background:#032E5B;padding:32px 40px;border-radius:12px 12px 0 0;">
            <h1 style="color:#ED7426;font-size:24px;font-weight:700;margin:0 0 4px 0;">New Job Application</h1>
            <p style="color:rgba(255,255,255,0.7);font-size:14px;margin:0;">Point Freight Systems — pointfs.com</p>
          </div>
          <div style="background:#fff;padding:32px 40px;">
            <table style="width:100%;border-collapse:collapse;">
              ${row("Name", fullName)}
              ${row("Job Role", jobRole)}
              ${row("Email", email)}
              ${row("Phone", phone)}
              ${row("Country", country)}
              ${row("LinkedIn", linkedin)}
            </table>
            ${interests ? `
            <div style="margin-top:24px;">
              <p style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 8px 0;">Areas of Interest</p>
              <p style="font-size:15px;color:#444;background:#f9f9f9;padding:16px;border-radius:8px;margin:0;line-height:1.6;">${interests}</p>
            </div>` : ""}
          </div>
          <div style="background:#f9f9f9;padding:20px 40px;border-radius:0 0 12px 12px;border-top:1px solid #eee;">
            <p style="font-size:12px;color:#aaa;margin:0;text-align:center;">
              Point Freight Systems · 650 N Sam Houston Pkwy, E Suite 550, Houston TX 77060 ·
              <a href="mailto:info@pointfs.com" style="color:#ED7426;">info@pointfs.com</a>
            </p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: "Point Freight Systems <onboarding@resend.dev>",
      to: [email],
      subject: "We received your application — Point Freight Systems",
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#032E5B;padding:32px 40px;border-radius:12px 12px 0 0;">
            <h1 style="color:#ED7426;font-size:22px;font-weight:700;margin:0;">Thanks, ${fullName.split(" ")[0]}!</h1>
          </div>
          <div style="background:#fff;padding:32px 40px;border-radius:0 0 12px 12px;">
            <p style="font-size:16px;color:#444;line-height:1.6;margin:0 0 16px 0;">
              We've received your application and our team will review it within <strong>24–48 hours</strong>.
            </p>
            <p style="font-size:15px;color:#032E5B;margin:0;">
              📞 <a href="tel:8442047016" style="color:#ED7426;text-decoration:none;">844-204-7016</a><br/>
              ✉️ <a href="mailto:info@pointfs.com" style="color:#ED7426;text-decoration:none;">info@pointfs.com</a>
            </p>
            <p style="font-size:13px;color:#aaa;margin:32px 0 0 0;">Your Freight. Our Focus. Always on POINT.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Work With Us API error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
