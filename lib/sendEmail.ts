import nodemailer from "nodemailer";
import fs from "fs";

interface MailData {
  to: string | string[];
  subject: string;
  html: string;
  attachmentPath?: string;
  attachmentName?: string;
  base64: any;
}

export async function sendMail(data: MailData) {
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_FROM = process.env.SMTP_FROM;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT as string),
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
  let response;
  let attach: any;
  let attachments: any = [];
  const headers = {
    "Content-Type": "text/html; charset=utf-8",
  };

  const base64ToBuffer = (base64: string): Buffer => {
    return Buffer.from(base64, "base64");
  };
  try {
    if (data.attachmentPath && data.attachmentPath != "") {
      attach = [
        {
          filename: data.attachmentName,
          content: fs.readFileSync(
            process.env.BASE_PATH ?? "" + data.attachmentPath
          ),
          cid: "merchant-logo",
        },
      ];
      attachments.push({ filename: attach.filename, cid: attach.cid } as never);

      if (data.base64 != "") {
        let base64: any = base64ToBuffer(data.base64);

        attach.push({
          filename: "receipt.pdf",
          content: base64,
        });
      }

      response = await transporter.sendMail({
        from: SMTP_FROM,
        to: Array.isArray(data.to) ? data.to.join(", ") : data.to,
        subject: data.subject,
        html: data.html.replace(
          "cid:merchant-logo",
          `cid:${attachments[0].cid}`
        ),
        attachments: attach,
        headers: headers,
      });
    } else {
      if (data.base64 && data.base64 != "") {
        let base64: any = base64ToBuffer(data.base64);

        const attachment: any[] = [
          {
            filename: "receipt.pdf",
            content: base64,
          },
        ];

        await transporter.sendMail({
          from: SMTP_FROM,
          to: Array.isArray(data.to) ? data.to.join(", ") : data.to,
          subject: data.subject,
          html: data.html,
          attachments: attachment,
        });
      } else {
        response = await transporter.sendMail({
          from: SMTP_FROM,
          to: Array.isArray(data.to) ? data.to.join(", ") : data.to,
          subject: data.subject,
          html: data.html,
          headers: headers,
        });
      }
    }
  } catch (error) {
    console.error("Error sending email", error);
  }
}
