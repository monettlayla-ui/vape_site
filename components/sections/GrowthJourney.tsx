import type { JourneyProfile } from "@/lib/journey";
import { GalleryImage } from "./GalleryImage";
import { GalleryProvider } from "./GalleryProvider";
import { JourneySlideshow } from "./JourneySlideshow";

export function GrowthJourney({ profile }: { profile: JourneyProfile }) {
  return (
    <div className="rounded-lg bg-[#f7f7f7] p-8 md:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <h3 className="font-script text-3xl text-nav-ink">
            From Fluff to Full Grown
          </h3>

          <div className="mt-4 flex flex-col gap-4 font-nav leading-relaxed text-nav-ink">
            {profile.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        <GalleryProvider images={profile.stages} alt={profile.name}>
          {profile.stages.length > 2 ? (
            <div className="flex md:justify-end">
              <JourneySlideshow
                name={profile.name}
                stages={profile.stages}
                width={165}
                height={210}
                bordered={false}
                labelPosition="overlay"
              />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 md:justify-end">
              {profile.stages.map((stage, i) => (
                <div
                  key={stage.local_path}
                  className="relative h-[210px] w-[165px] shrink-0 overflow-hidden rounded-md shadow-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_35px_60px_-15px_rgba(42,21,16,0.45)]"
                >
                  <GalleryImage
                    src={`/${stage.local_path}`}
                    alt={`${profile.name} — ${stage.label}`}
                    index={i}
                    sizes="165px"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-nav-ink/85 py-1.5 text-center font-nav text-sm font-bold text-white">
                    {stage.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </GalleryProvider>
      </div>
    </div>
  );
}
