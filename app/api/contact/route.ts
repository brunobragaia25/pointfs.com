import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName: name, email, phone, companyName: company, jobRole, country, reason, origin, destination } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Point Freight Systems <onboarding@resend.dev>",
      to: ["info@pointfs.com"],
      reply_to: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 0;">
          <!-- Header -->
          <div style="background: #032E5B; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ED7426; font-size: 24px; font-weight: 700; margin: 0 0 4px 0;">New Freight Quote Request</h1>
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; margin: 0;">Point Freight Systems — pointfs.com</p>
          </div>

          <!-- Body -->
          <div style="background: #ffffff; padding: 32px 40px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 40%;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Name</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B; font-weight: 500;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Email</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <a href="mailto:${email}" style="font-size: 15px; color: #ED7426;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Phone</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${phone}</span>
                </td>
              </tr>` : ""}
              ${company ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Company</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${company}</span>
                </td>
              </tr>` : ""}
              ${jobRole ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Job Role</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${jobRole}</span>
                </td>
              </tr>` : ""}
              ${country ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Country</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${country}</span>
                </td>
              </tr>` : ""}
              ${reason ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Reason</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${reason}</span>
                </td>
              </tr>` : ""}
              ${origin ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Origin</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${origin}</span>
                </td>
              </tr>` : ""}
              ${destination ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em;">Destination</span>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <span style="font-size: 15px; color: #032E5B;">${destination}</span>
                </td>
              </tr>` : ""}
            </table>

            ${message ? `
            <div style="margin-top: 24px;">
              <p style="font-size: 12px; font-weight: 600; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Additional Details</p>
              <p style="font-size: 15px; color: #444; background: #f9f9f9; padding: 16px; border-radius: 8px; margin: 0; line-height: 1.6;">${message}</p>
            </div>` : ""}
          </div>

          <!-- Footer -->
          <div style="background: #f9f9f9; padding: 20px 40px; border-radius: 0 0 12px 12px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #aaa; margin: 0; text-align: center;">
              Point Freight Systems · 650 N Sam Houston Pkwy, E Suite 550, Houston TX 77060 ·
              <a href="mailto:info@pointfs.com" style="color: #ED7426;">info@pointfs.com</a>
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation to requester
    await resend.emails.send({
      from: "Point Freight Systems <onboarding@resend.dev>",
      to: [email],
      subject: "We received your freight quote request",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #032E5B; padding: 32px 40px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ED7426; font-size: 22px; font-weight: 700; margin: 0;">Thanks, ${name.split(" ")[0]}!</h1>
          </div>
          <div style="background: #ffffff; padding: 32px 40px; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; color: #444; line-height: 1.6; margin: 0 0 16px 0;">
              We've received your freight quote request and our team will get back to you within <strong>24 hours</strong>.
            </p>
            <p style="font-size: 15px; color: #444; line-height: 1.6; margin: 0 0 24px 0;">
              In the meantime, feel free to reach us directly:
            </p>
            <p style="font-size: 15px; color: #032E5B; margin: 0;">
              📞 <a href="tel:8442047016" style="color: #ED7426; text-decoration: none;">844-204-7016</a><br/>
              ✉️ <a href="mailto:info@pointfs.com" style="color: #ED7426; text-decoration: none;">info@pointfs.com</a>
            </p>
            <p style="font-size: 13px; color: #aaa; margin: 32px 0 0 0;">
              Your Freight. Our Focus. Always on POINT.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
