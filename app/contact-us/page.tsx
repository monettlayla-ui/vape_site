import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.fullName} in Brisbane, Queensland. Call, WhatsApp or send an enquiry about our Maine Coon kittens for sale.`,
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <main className="flex-1">
      <ContactSection />
    </main>
  );
}
