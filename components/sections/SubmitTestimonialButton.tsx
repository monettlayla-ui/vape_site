"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SpeechIcon } from "@/components/icons/SpeechIcon";
import { XIcon } from "@/components/icons/XIcon";
import {
  sendTestimonialEmail,
  type TestimonialFormState,
} from "@/lib/sendTestimonialEmail";
import { FieldTooltip } from "./FieldTooltip";

const FIELD_CLASS =
  "w-full rounded-none bg-[#f2f2f2] px-4 py-3 font-nav text-nav-ink placeholder-nav-ink/40 outline-none focus:bg-[#eaeaea]";

const INITIAL_STATE: TestimonialFormState = { success: false, message: "" };

export function SubmitTestimonialButton({
  className,
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, pending] = useActionState(
    sendTestimonialEmail,
    INITIAL_STATE
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          className ??
          "inline-flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-6 py-3 font-nav text-white transition-opacity hover:opacity-90"
        }
      >
        <SpeechIcon className="h-5 w-5" />
        Submit Testimonial
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4">
          <div className="relative max-h-[90vh] w-full max-w-[500px] overflow-y-auto bg-white p-8 text-left md:p-10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 cursor-pointer text-nav-ink/60 hover:text-nav-ink"
            >
              <XIcon className="h-5 w-5" />
            </button>

            <h2 className="font-script text-3xl text-nav-ink">
              Submit a Testimonial
            </h2>

            <p className="mt-4 font-nav text-nav-ink/90">
              If you have any concerns or if there is something you were
              unhappy with, we encourage you to{" "}
              <Link
                href="/contact-us"
                className="text-nav-accent hover:underline"
              >
                contact us
              </Link>{" "}
              directly so we can better understand the situation and do our
              best to resolve it.
            </p>

            <form
              ref={formRef}
              action={formAction}
              className="mt-6 flex flex-col gap-5"
            >
              <div>
                <label className="inline-flex items-center gap-2 font-nav font-bold text-nav-ink">
                  Name *
                  <FieldTooltip>
                    You&apos;re more than welcome to leave your full name.
                    If you&apos;d prefer not to, please leave at least your
                    first name followed by the first letter of your last
                    name, e.g. Tony P.
                  </FieldTooltip>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name (e.g. Tony P.)*"
                  required
                  className={`mt-2 ${FIELD_CLASS}`}
                />
              </div>

              <div>
                <label className="inline-flex items-center gap-2 font-nav font-bold text-nav-ink">
                  Email *
                  <FieldTooltip>
                    Your email address is requested for verification
                    purposes only. It helps confirm that testimonials are
                    genuine and allows us to contact you if we need to
                    clarify anything about your submission. Your email
                    address will not be published on the website.
                  </FieldTooltip>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (not published on website)*"
                  required
                  className={`mt-2 ${FIELD_CLASS}`}
                />
              </div>

              <div>
                <p className="font-nav font-bold text-nav-ink">
                  Star Rating *
                </p>
                <div className="mt-2 flex items-center gap-5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <label
                      key={n}
                      className="inline-flex cursor-pointer items-center gap-1.5 font-nav text-nav-ink"
                    >
                      <input
                        type="radio"
                        name="rating"
                        value={n}
                        required
                        className="h-4 w-4 cursor-pointer accent-nav-accent"
                      />
                      {n}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-nav font-bold text-nav-ink">
                  Testimonial *
                </label>
                <textarea
                  name="testimonial"
                  placeholder="Please leave your testimonial*"
                  required
                  rows={5}
                  className={`mt-2 ${FIELD_CLASS}`}
                />
              </div>

              <div>
                <p className="font-nav font-bold text-nav-ink">AntiSpam *</p>
                <label className="mt-2 inline-flex cursor-pointer items-center gap-3 rounded-full border border-nav-ink/15 bg-white px-5 py-2.5">
                  <input
                    type="checkbox"
                    className="h-5 w-5 appearance-none rounded-full border-2 border-nav-ink/30 checked:border-green-600 checked:bg-green-500"
                  />
                  <span className="font-nav text-sm text-nav-ink">
                    I am not a robot
                  </span>
                </label>
              </div>

              <div className="mt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-8 py-3 font-nav text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
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
      )}
    </>
  );
}
