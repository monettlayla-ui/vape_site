"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { siteConfig } from "@/lib/site-config";

const EMAIL = `${siteConfig.brandPrimary.toLowerCase().replace(" ", "")}@gmail.com`;
const WHATSAPP_MESSAGE =
  "Hi! I'm interested in learning more about your Maine Coon kittens. Could you please share more details and current availability? Thank you!";
const WHATSAPP_HREF = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function TopBar() {
  const pathname = usePathname();
  const isFaqs = pathname.startsWith("/faqs");
  const isBlogs = pathname.startsWith("/blogs");

  return (
    <div className="hidden bg-[#f7f7f7] md:block">
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-6 py-2.5">
        <span className="font-script text-xl text-nav-ink">
          {siteConfig.fullName}
        </span>

        <div className="ml-auto flex items-center gap-6 font-nav text-sm font-bold">
          <Link
            href="/faqs"
            className={`transition-colors hover:text-nav-accent ${
              isFaqs ? "text-nav-accent" : "text-nav-ink"
            }`}
          >
            FAQs
          </Link>
          <Link
            href="/blogs"
            className={`transition-colors hover:text-nav-accent ${
              isBlogs ? "text-nav-accent" : "text-nav-ink"
            }`}
          >
            Blogs
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-nav-ink px-4 py-1.5 font-nav text-sm text-white transition-opacity hover:opacity-90"
          >
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(45deg,#7A2E1D_0%,#D97A3F_100%)] px-4 py-1.5 font-nav text-sm text-white transition-opacity hover:opacity-90"
          >
            <MailIcon className="h-4 w-4" />
            {EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
