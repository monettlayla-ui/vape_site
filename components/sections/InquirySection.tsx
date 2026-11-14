"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronIcon } from "@/components/icons/ChevronIcon";
import { ChevronLeftIcon } from "@/components/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";

type NavLink = { href: string; label: string };

const FIELD_BASE =
  "w-full bg-white/25 px-5 py-3 font-nav text-white placeholder-white/80 outline-none focus:bg-white/35";
const FIELD_CLASS = `${FIELD_BASE} rounded-none`;

export function InquirySection({
  prev,
  next,
}: {
  prev?: NavLink;
  next?: NavLink;
}) {
  const [enquiry, setEnquiry] = useState("");

  return (
    <section className="bg-[#f7f7f7] py-16">
      <div className="mx-auto max-w-[560px] px-6 text-center">
        <h2 className="font-nav text-3xl font-bold leading-snug text-nav-ink md:text-4xl">
          Interested?
          <br />
          Find Out More Today!
        </h2>

        <form className="mt-8 rounded-2xl bg-[linear-gradient(135deg,#D97A3F_0%,#7A2E1D_60%,#2A1510_100%)] p-8 shadow-xl md:p-10">
          <h3 className="text-center font-script text-3xl text-white">
            Contact Form
          </h3>

          <div className="mt-6 flex flex-col gap-4">
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
                <option value="" disabled className="text-nav-ink">
                  ==Please Select==
                </option>
                <option value="general" className="text-nav-ink">
                  I have a general enquiry
                </option>
                <option value="kitten" className="text-nav-ink">
                  I am Interested in a Maine Coon
                </option>
              </select>
              <ChevronIcon className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
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
                  className={`${FIELD_BASE} rounded-none`}
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
                  className={`${FIELD_BASE} rounded-none`}
                />
                <textarea
                  name="why_maine_coon"
                  placeholder="Why do you want to own a Maine Coon?*"
                  required
                  rows={4}
                  className={`${FIELD_BASE} rounded-none`}
                />
                <textarea
                  name="requirements"
                  placeholder="Do you have any specific requirements?* (e.g. Male/Female/Colour)"
                  required
                  rows={3}
                  className={`${FIELD_BASE} rounded-none`}
                />

                <div className="text-left">
                  <p className="font-nav text-white">
                    Are you prepared for the potential grooming requirement of
                    a Maine Coon?*
                  </p>
                  <div className="mt-3 flex items-center gap-6">
                    <label className="inline-flex cursor-pointer items-center gap-2 font-nav text-white">
                      <input
                        type="radio"
                        name="grooming_ready"
                        value="yes"
                        required
                        className="h-4 w-4 appearance-none rounded-full border-2 border-white checked:bg-white"
                      />
                      Yes
                    </label>
                    <label className="inline-flex cursor-pointer items-center gap-2 font-nav text-white">
                      <input
                        type="radio"
                        name="grooming_ready"
                        value="no"
                        required
                        className="h-4 w-4 appearance-none rounded-full border-2 border-white checked:bg-white"
                      />
                      No
                    </label>
                  </div>
                </div>
              </>
            )}
          </div>

          <label className="mx-auto mt-6 flex w-fit cursor-pointer items-center gap-3 rounded-full bg-white px-5 py-2.5">
            <input
              type="checkbox"
              className="h-5 w-5 appearance-none rounded-full border-2 border-nav-ink/30 checked:border-green-600 checked:bg-green-500"
            />
            <span className="font-nav text-sm text-nav-ink">
              I am not a robot
            </span>
          </label>

          <div className="mt-6 flex justify-center">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-nav-ink px-8 py-3 font-nav text-white transition-opacity hover:opacity-90"
            >
              Send <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </form>
      </div>

      {(prev || next) && (
        <div className="mx-auto mt-10 flex max-w-[1200px] items-center justify-between px-6 font-nav font-bold text-nav-ink/60">
          {prev ? (
            <Link
              href={prev.href}
              className="inline-flex items-center gap-1 transition-colors hover:text-nav-ink"
            >
              <ChevronLeftIcon className="h-4 w-4" /> Prev
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={next.href}
              className="inline-flex items-center gap-1 transition-colors hover:text-nav-ink"
            >
              Next <ChevronRightIcon className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      )}
    </section>
  );
}
