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

export function ProcessPerspectives() {
  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-nav-ink/15 lg:block"
        />

        <div className="text-lg">
          <h2 className="font-script text-4xl leading-snug text-nav-ink">
            From a Future Owner&apos;s Perspective
          </h2>

          <p className="mt-4 font-nav text-nav-ink/90">
            When you place a deposit, your kitten already feels like part of
            your home.
          </p>
          <p className="mt-4 font-nav text-nav-ink/90">It&apos;s natural to:</p>

          <ul className="mt-3 flex flex-col gap-3">
            <ChecklistItem>Look forward to regular updates</ChecklistItem>
            <ChecklistItem>Want to see growth and changes</ChecklistItem>
            <ChecklistItem>Feel eager as collection day approaches</ChecklistItem>
          </ul>

          <p className="mt-4 font-nav text-nav-ink/90">
            That excitement is completely understood and respected.
          </p>

          <div className="mt-6 bg-white p-8 shadow-sm">
            <h3 className="font-script text-3xl text-nav-ink">
              Please Note Before Enquiring
            </h3>
            <div className="mt-4 flex flex-col gap-4 font-nav text-nav-ink/90">
              <p>
                For the health, safety and wellbeing of our kittens, we do
                not offer cattery visits or in-person kitten selection
                appointments.
              </p>
              <p>
                We provide photographs, videos, temperament information and
                personal guidance to help you choose the kitten best suited
                to your family.
              </p>
              <p>
                Please do not request an appointment to visit, play with or
                select a kitten in person. We appreciate your understanding
                and respect for the welfare practices we have in place.
              </p>
            </div>
          </div>
        </div>

        <div className="text-lg">
          <h2 className="font-script text-4xl leading-snug text-nav-ink">
            From Our Perspective as Breeders
          </h2>

          <p className="mt-4 font-nav text-nav-ink/90">
            Behind the scenes, raising a litter of Maine Coons is a
            full-time commitment focused on health, development and
            stability.
          </p>
          <p className="mt-4 font-nav text-nav-ink/90">
            At {siteConfig.brandPrimary}:
          </p>

          <ul className="mt-3 flex flex-col gap-3">
            <ChecklistItem>Every kitten is born under direct supervision</ChecklistItem>
            <ChecklistItem>Nursery rooms are purpose-built — never crates</ChecklistItem>
            <ChecklistItem>Litters are monitored day and night</ChecklistItem>
            <ChecklistItem>
              Feeding, cleaning and health checks occur multiple times daily
            </ChecklistItem>
            <ChecklistItem>Supplemental feeding can require 3-hour intervals</ChecklistItem>
            <ChecklistItem>Weaning and desexing stages require close observation</ChecklistItem>
          </ul>

          <p className="mt-4 font-nav text-nav-ink/90">
            Our priority is always the welfare and development of the
            kittens in our care.
          </p>
          <p className="mt-4 font-nav font-bold text-nav-ink">
            Photography and content creation come second to hands-on care.
          </p>
        </div>
      </div>
    </section>
  );
}
