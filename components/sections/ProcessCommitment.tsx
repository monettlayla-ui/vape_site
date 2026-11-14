import Image from "next/image";
import type { ReactNode } from "react";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { siteConfig } from "@/lib/site-config";

function ChecklistItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircleIcon className="h-6 w-6 shrink-0 text-nav-ink" />
      <span className="font-nav text-nav-ink/90">{children}</span>
    </li>
  );
}

export function ProcessCommitment() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="text-lg">
            <h2 className="font-script text-4xl leading-snug text-nav-ink">
              Our Commitment to You
            </h2>

            <p className="mt-4 font-nav text-nav-ink/90">
              While we maintain a structured update schedule, every buyer
              receives:
            </p>

            <ul className="mt-3 flex flex-col gap-3">
              <ChecklistItem>Veterinary health checks</ChecklistItem>
              <ChecklistItem>Vaccination records</ChecklistItem>
              <ChecklistItem>Microchipping</ChecklistItem>
              <ChecklistItem>Desexing prior to rehoming</ChecklistItem>
              <ChecklistItem>Ongoing support and guidance</ChecklistItem>
            </ul>

            <p className="mt-4 font-nav text-nav-ink/90">
              Your kitten&apos;s wellbeing is never compromised for
              convenience.
            </p>
          </div>

          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
            <Image
              src="/pages/our-process/commitment.jpg"
              alt="Our Commitment to You"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg lg:order-1">
            <Image
              src="/pages/our-process/standard.jpg"
              alt={`The ${siteConfig.brandPrimary} Standard`}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="text-lg lg:order-2">
            <h2 className="font-script text-4xl leading-snug text-nav-ink">
              The {siteConfig.brandPrimary} Standard
            </h2>

            <p className="mt-4 font-nav text-nav-ink/90">
              Breeding quality European Giant Maine Coons is a 24/7
              responsibility.
            </p>
            <p className="mt-4 font-nav text-nav-ink/90">
              We are committed to:
            </p>

            <ul className="mt-3 flex flex-col gap-3">
              <ChecklistItem>Ethical breeding practices</ChecklistItem>
              <ChecklistItem>Proper nursery environments</ChecklistItem>
              <ChecklistItem>
                Developmentally appropriate rehoming ages
              </ChecklistItem>
              <ChecklistItem>
                Transparency and professional communication
              </ChecklistItem>
            </ul>

            <p className="mt-4 font-nav text-nav-ink/90">
              By reserving a {siteConfig.brandPrimary} kitten, buyers
              acknowledge and agree to the structured process outlined
              above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
