"use server";

import { getTransporter } from "@/lib/mailer";
import { siteConfig } from "@/lib/site-config";

export type ContactFormState = {
  success: boolean;
  message: string;
};

function buildEmailBody(formData: FormData) {
  const enquiry = formData.get("enquiry");
  const lines: string[] = [];

  lines.push(`Name: ${formData.get("name")}`);
  lines.push(`Email: ${formData.get("email")}`);
  lines.push(`Phone: ${formData.get("phone")}`);
  lines.push(
    `Enquiry type: ${enquiry === "kitten" ? "Interested in a Maine Coon" : "General enquiry"}`
  );

  if (enquiry === "general") {
    lines.push(`Subject: ${formData.get("subject")}`);
    lines.push(`Message: ${formData.get("message")}`);
  } else if (enquiry === "kitten") {
    lines.push(`Location: ${formData.get("location") || "-"}`);
    lines.push(`Family/Household: ${formData.get("household") || "-"}`);
    lines.push(`Other pets: ${formData.get("other_pets")}`);
    lines.push(`Why a Maine Coon: ${formData.get("why_maine_coon")}`);
    lines.push(`Specific requirements: ${formData.get("requirements")}`);
    lines.push(`Ready for grooming: ${formData.get("grooming_ready")}`);
  }

  return lines.join("\n");
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const enquiry = formData.get("enquiry")?.toString();

  if (!name || !email || !phone || !enquiry) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"${siteConfig.fullName} Website" <${process.env.GMAIL_USER}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: buildEmailBody(formData),
    });

    return {
      success: true,
      message: "Thanks! Your message has been sent — we'll be in touch soon.",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message:
        "Sorry, something went wrong sending your message. Please try again or contact us directly.",
    };
  }
}
