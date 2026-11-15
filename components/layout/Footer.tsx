import Link from "next/link";
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import { HashIcon } from "@/components/icons/HashIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { PinIcon } from "@/components/icons/PinIcon";
import { SubmitTestimonialButton } from "@/components/sections/SubmitTestimonialButton";
import { leftNavLinks, rightNavLinks } from "@/lib/navigation";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#2A1510] py-14 text-white/80">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div className="text-center md:border-r md:border-white/10 md:pr-10 md:text-left">
          <PinIcon className="mx-auto h-9 w-9 text-white md:mx-0" />
          <h3 className="mt-3 font-script text-3xl text-white">
            Our Location
          </h3>
          <p className="mt-2 font-nav text-sm text-white/50">
            Proudly Brisbane Based
          </p>

          <p className="mt-4 font-nav leading-relaxed">
            {siteConfig.fullName} is based in Brisbane, Queensland. We
            welcome enquiries from Brisbane and surrounding areas including
            Logan, the Gold Coast, Sunshine Coast, Caboolture and Bribie
            Island.
          </p>

          <p className="mt-4 font-nav leading-relaxed">
            We also assist families Australia-wide with safe and reliable
            transport options where needed.
          </p>

          <p className="mt-4 font-nav leading-relaxed">
            If you&apos;re looking for a Maine Coon breeder in Brisbane, or a
            Maine Coon for sale in Australia with secure interstate options,
            please contact us and we&apos;ll guide you through current
            availability and next steps.
          </p>
        </div>

        <div className="text-center md:border-r md:border-white/10 md:pr-10 md:text-left">
          <h3 className="font-script text-3xl text-white">
            Contact Details
          </h3>

          <ul className="mt-4 flex flex-col gap-2 font-nav">
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <PhoneIcon className="h-4 w-4 shrink-0" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
                className="hover:underline"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <MailIcon className="h-4 w-4 shrink-0" />
              {siteConfig.email}
            </li>
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <HashIcon className="h-4 w-4 shrink-0" />
              ANCATS17102
            </li>
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <GlobeIcon className="h-4 w-4 shrink-0" />
              Brisbane QLD 4000
            </li>
          </ul>

          <SubmitTestimonialButton className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(45deg,#7A2E1D_0%,#D97A3F_100%)] px-6 py-3 font-nav text-white transition-opacity hover:opacity-90" />
        </div>

        <div>
          <Link
            href="/"
            className="flex items-center gap-2 border-b border-white/10 py-3 font-nav text-white"
          >
            <HomeIcon className="h-4 w-4" />
          </Link>
          {[...leftNavLinks, ...rightNavLinks].map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block border-b border-white/10 py-3 font-nav text-white"
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block border-b border-white/10 py-3 pl-4 font-nav text-white/70"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-white/10 pt-6">
        <p className="px-6 text-center font-nav text-sm text-white/60">
          Copyright &copy; 2026 {siteConfig.fullName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
