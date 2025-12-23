import nodemailer from "nodemailer";
import fs from "fs";

interface MailData {
  to: string | string[];
  subject: string;
  html: string;
  attachmentPath?: string;
  attachmentName?: string;
  base64?: string;
}

export async function sendMail(data: MailData) {
  const SMTP_FROM = process.env.SMTP_FROM;
  const SMTP_PASS = process.env.SMTP_PASS;

  // Create transporter with Gmail service
  // When using service: "Gmail", nodemailer automatically handles host and port
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: SMTP_FROM,
      pass: SMTP_PASS, // This should be a Gmail App Password, not your regular password
    },
  });

  // Verify transporter configuration
  try {
    await transporter.verify();
    console.log("SMTP server is ready to send emails");
  } catch (error) {
    console.error("SMTP verification failed:", error);
    throw new Error(
      "Failed to connect to Gmail SMTP server. Please check your credentials."
    );
  }

  const headers = {
    "Content-Type": "text/html; charset=utf-8",
  };

  const base64ToBuffer = (base64: string): Buffer => {
    return Buffer.from(base64, "base64");
  };

  try {
    let attachments: any[] = [];

    // Handle file attachments if attachmentPath is provided
    if (data.attachmentPath && data.attachmentPath !== "") {
      const filePath = process.env.BASE_PATH
        ? `${process.env.BASE_PATH}${data.attachmentPath}`
        : data.attachmentPath;

      attachments.push({
        filename: data.attachmentName || "attachment",
        content: fs.readFileSync(filePath),
        cid: "merchant-logo",
      });

      // Replace cid in HTML if needed
      data.html = data.html.replace("cid:merchant-logo", "cid:merchant-logo");
    }

    // Handle base64 attachments (PDFs, etc.)
    if (data.base64 && data.base64 !== "") {
      const base64Buffer = base64ToBuffer(data.base64);
      attachments.push({
        filename: "receipt.pdf",
        content: base64Buffer,
      });
    }

    // Prepare email options
    const mailOptions = {
      from: SMTP_FROM,
      to: Array.isArray(data.to) ? data.to.join(", ") : data.to,
      subject: data.subject,
      html: data.html,
      attachments: attachments.length > 0 ? attachments : undefined,
      headers: headers,
    };

    // Send email
    const response = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", response.messageId);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw to allow API route to handle it
  }
}
