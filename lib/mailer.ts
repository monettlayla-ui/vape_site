import nodemailer from "nodemailer";

export function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Email is not configured on the server.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}
