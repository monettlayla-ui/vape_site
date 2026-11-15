"use server";

import { getTransporter } from "@/lib/mailer";
import { siteConfig } from "@/lib/site-config";

export type TestimonialFormState = {
  success: boolean;
  message: string;
};

export async function sendTestimonialEmail(
  _prevState: TestimonialFormState,
  formData: FormData
): Promise<TestimonialFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const rating = formData.get("rating")?.toString();
  const testimonial = formData.get("testimonial")?.toString().trim();

  if (!name || !email || !rating || !testimonial) {
    return { success: false, message: "Please fill in all required fields." };
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"${siteConfig.fullName} Website" <${process.env.GMAIL_USER}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New testimonial from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Star rating: ${rating}`,
        "",
        testimonial,
      ].join("\n"),
    });

    return {
      success: true,
      message: "Thank you for your testimonial!",
    };
  } catch (error) {
    console.error("Failed to send testimonial email:", error);
    return {
      success: false,
      message:
        "Sorry, something went wrong submitting your testimonial. Please try again later.",
    };
  }
}
