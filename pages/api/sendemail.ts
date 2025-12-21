import { sendMail } from "@/lib/sendEmail";
import { NextApiRequest, NextApiResponse } from "next";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message, projectType }: ContactFormData =
      req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "Missing required fields",
        missingFields: {
          name: !name,
          email: !email,
          subject: !subject,
          message: !message,
        },
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="border-bottom: 3px solid #0070f3; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #333; margin: 0;">New Contact Form Submission</h1>
            <p style="color: #666; margin: 5px 0 0 0;">From your portfolio website</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #0070f3; margin: 0 0 5px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Contact Information</h3>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 5px 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
              ${
                projectType
                  ? `<p style="margin: 5px 0; font-size: 16px;"><strong>Project Type:</strong> ${projectType}</p>`
                  : ""
              }
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #0070f3; margin: 0 0 5px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Subject</h3>
              <p style="margin: 5px 0; font-size: 16px; font-weight: 600;">${subject}</p>
            </div>
            
            <div>
              <h3 style="color: #0070f3; margin: 0 0 5px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #0070f3;">
                <p style="margin: 0; line-height: 1.6; font-size: 16px; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This message was sent from your portfolio contact form on ${new Date().toLocaleString()}
            </p>
            <p style="color: #666; font-size: 14px; margin: 10px 0 0 0;">
              Reply to: <a href="mailto:${email}" style="color: #0070f3;">${email}</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to yourself
    await sendMail({
      to: "codewithkashif318@gmail.com", // Your email
      subject: `Portfolio Contact: ${subject}`,
      html: htmlContent,
      base64: "",
    });

    // Send confirmation email to sender
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="border-bottom: 3px solid #0070f3; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #333; margin: 0;">Thank You for Your Message!</h1>
            <p style="color: #666; margin: 5px 0 0 0;">Message received successfully</p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Hi ${name},
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Here's a copy of what you sent:
            </p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #0070f3; margin: 20px 0;">
              <p style="margin: 0 0 10px 0; font-weight: 600;">Subject: ${subject}</p>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Looking forward to discussing your project!
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong>Kashif</strong>
            </p>
          </div>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This is an automated confirmation email from codewithkashif318@gmail.com
            </p>
          </div>
        </div>
      </div>
    `;

    await sendMail({
      to: email,
      subject: "Thanks for reaching out! - Message Received",
      html: confirmationHtml,
      base64: "",
    });

    res.status(200).json({
      message: "Email sent successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    res.status(500).json({
      message: "Failed to send email",
      error: "Internal server error",
      success: false,
    });
  }
};

export default handler;
