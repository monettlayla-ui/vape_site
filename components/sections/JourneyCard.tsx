import Link from "next/link";
import type { JourneyProfile } from "@/lib/journey";
import { GalleryImage } from "./GalleryImage";
import { GalleryProvider } from "./GalleryProvider";
import { JourneySlideshow } from "./JourneySlideshow";

export function JourneyCard({
  profile,
  href,
}: {
  profile: JourneyProfile;
  href?: string;
}) {
  return (
    <div className="bg-[#f7f7f7] p-8 text-center">
      <h3 className="font-script text-4xl text-nav-ink">{profile.name}</h3>
      <p className="mt-2 font-nav text-sm font-bold text-nav-ink/50">
        {profile.stagesLabel}
      </p>

      <GalleryProvider images={profile.stages} alt={profile.name}>
        {profile.stages.length > 2 ? (
          <div className="mt-4 flex justify-center">
            <JourneySlideshow
              name={profile.name}
              stages={profile.stages}
              width={170}
            />
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {profile.stages.map((stage, i) => (
              <div key={stage.local_path} className="w-[170px]">
                <div className="relative aspect-[3/4] w-full overflow-hidden border-8 border-white bg-white shadow-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_35px_60px_-15px_rgba(42,21,16,0.45)]">
                  <GalleryImage
                    src={`/${stage.local_path}`}
                    alt={`${profile.name} — ${stage.label}`}
                    index={i}
                    sizes="170px"
                  />
                </div>
                <p className="mt-2 font-nav text-sm text-nav-ink">{stage.label}</p>
              </div>
            ))}
          </div>
        )}
      </GalleryProvider>

      <div className="mt-6 flex flex-col gap-4 text-left font-nav leading-relaxed text-nav-ink">
        {profile.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-nav-ink px-6 py-2.5 font-nav text-sm text-white transition-opacity hover:opacity-90"
        >
          View {profile.name}
        </Link>
      )}
    </div>
  );
}
