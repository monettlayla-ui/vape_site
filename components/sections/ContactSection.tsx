"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { ClockIcon } from "@/components/icons/ClockIcon";
import { HashIcon } from "@/components/icons/HashIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { PinIcon } from "@/components/icons/PinIcon";
import { sendContactEmail, type ContactFormState } from "@/lib/sendContactEmail";
import { siteConfig } from "@/lib/site-config";

const INITIAL_STATE: ContactFormState = { success: false, message: "" };

const FIELD_CLASS =
  "w-full border border-nav-ink/15 bg-white px-5 py-3 font-nav text-nav-ink placeholder-nav-ink/50 outline-none focus:border-nav-accent";

const CONTACT_ROWS = [
  { icon: PinIcon, label: "Location:", value: "Brisbane QLD 4000" },
  { icon: PhoneIcon, label: "Mobile:", value: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
  { icon: ClockIcon, label: "Contact Times:", value: "Daily: 7:00am - 8:00pm" },
  { icon: MailIcon, label: "Email:", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: HashIcon, label: "ANCATS:", value: "ANCATS17102" },
];

export function ContactSection() {
  const [enquiry, setEnquiry] = useState("");
  const [state, formAction, pending] = useActionState(
    sendContactEmail,
    INITIAL_STATE
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      setEnquiry("");
    }
  }, [state]);

  return (
    <section className="bg-[#f7f7f7] py-14">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:grid-cols-[3fr_2fr] md:gap-16">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="font-script text-4xl leading-snug text-nav-ink md:text-5xl">
              Get in Touch
            </h2>

            <dl className="mt-6 flex flex-col">
              {CONTACT_ROWS.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border-b border-nav-ink/10 py-3"
                >
                  <dt className="flex w-44 shrink-0 items-center gap-2 font-nav font-bold text-nav-ink">
                    <Icon className="h-4 w-4 shrink-0" />
                    {label}
                  </dt>
                  <dd className="font-nav">
                    {href ? (
                      <a href={href} className="text-nav-accent hover:underline">
                        {value}
                      </a>
                    ) : (
                      <span className="text-nav-ink/90">{value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl bg-white p-8 md:p-10">
            <h2 className="font-script text-3xl text-nav-ink">
              Please Note Before Enquiring
            </h2>

            <div className="mt-5 flex flex-col gap-4 font-nav leading-relaxed text-nav-ink/90">
              <p>
                For the health, safety and wellbeing of our kittens, we do not
                offer cattery visits or in-person kitten selection
                appointments.
              </p>
              <p>
                We provide photographs, videos, temperament information and
                personal guidance to help you choose the kitten best suited to
                your family.
              </p>
              <p>
                Please do not request an appointment to visit, play with or
                select a kitten in person. We appreciate your understanding
                and respect for the welfare practices we have in place.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 md:p-10">
          <h2 className="font-script text-3xl text-nav-ink">
            Contact Form
          </h2>

          <form ref={formRef} action={formAction} className="mt-6 flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className={FIELD_CLASS}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className={FIELD_CLASS}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              className={FIELD_CLASS}
            />
            <div className="relative">
              <select
                name="enquiry"
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
                className={`${FIELD_CLASS} cursor-pointer appearance-none pr-12`}
              >
                <option value="" disabled>
                  ==Please Select==
                </option>
                <option value="general">I have a general enquiry</option>
                <option value="kitten">I am Interested in a Maine Coon</option>
              </select>
              <ChevronIcon className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-nav-ink/50" />
            </div>

            {enquiry === "general" && (
              <>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  required
                  className={FIELD_CLASS}
                />
                <textarea
                  name="message"
                  placeholder="Leave a Message*"
                  required
                  rows={5}
                  className={FIELD_CLASS}
                />
              </>
            )}

            {enquiry === "kitten" && (
              <>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className={FIELD_CLASS}
                />
                <input
                  type="text"
                  name="household"
                  placeholder="Family/Household"
                  className={FIELD_CLASS}
                />
                <textarea
                  name="other_pets"
                  placeholder="Do you have other pets and how are they housed?*"
                  required
                  rows={4}
                  className={FIELD_CLASS}
                />
                <textarea
                  name="why_maine_coon"
                  placeholder="Why do you want to own a Maine Coon?*"
                  required
                  rows={4}
                  className={FIELD_CLASS}
                />
                <textarea
                  name="requirements"
                  placeholder="Do you have any specific requirements?* (e.g. Male/Female/Colour)"
                  required
                  rows={3}
                  className={FIELD_CLASS}
                />

                <div>
                  <p className="font-nav text-nav-ink">
                    Are you prepared for the potential grooming requirement of
                    a Maine Coon?*
                  </p>
                  <div className="mt-3 flex items-center gap-6">
                    <label className="inline-flex cursor-pointer items-center gap-2 font-nav text-nav-ink">
                      <input
                        type="radio"
                        name="grooming_ready"
                        value="yes"
                        required
                        className="h-4 w-4 appearance-none rounded-full border-2 border-nav-ink/30 checked:border-green-600 checked:bg-green-500"
                      />
                      Yes
                    </label>
                    <label className="inline-flex cursor-pointer items-center gap-2 font-nav text-nav-ink">
                      <input
                        type="radio"
                        name="grooming_ready"
                        value="no"
                        required
                        className="h-4 w-4 appearance-none rounded-full border-2 border-nav-ink/30 checked:border-green-600 checked:bg-green-500"
                      />
                      No
                    </label>
                  </div>
                </div>
              </>
            )}

            <label className="mt-2 flex w-fit cursor-pointer items-center gap-3 rounded-full border border-nav-ink/15 bg-white px-5 py-2.5">
              <input
                type="checkbox"
                className="h-5 w-5 appearance-none rounded-full border-2 border-nav-ink/30 checked:border-green-600 checked:bg-green-500"
              />
              <span className="font-nav text-sm text-nav-ink">
                I am not a robot
              </span>
            </label>

            <div className="mt-2 flex flex-col gap-3">
              <button
                type="submit"
                disabled={pending}
                className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(45deg,#7A2E1D_0%,#D97A3F_100%)] px-8 py-3 font-nav text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "Sending..." : "Send"}{" "}
                <span aria-hidden="true">&rarr;</span>
              </button>

              {state.message && (
                <p
                  className={`font-nav text-sm ${
                    state.success ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
