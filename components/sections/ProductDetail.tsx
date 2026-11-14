import Link from "next/link";
import { getJourneyProfile } from "@/lib/journey";
import type { Product } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";
import { CollapsibleNote } from "./CollapsibleNote";
import { GalleryImage } from "./GalleryImage";
import { GalleryProvider } from "./GalleryProvider";
import { GrowthJourney } from "./GrowthJourney";

const INFO_LABELS: Record<string, string> = {
  gender: "Gender",
  born: "Born",
  sale_status: "Sale Status",
  colour: "Colour",
};

const NOTE_PARAGRAPHS = [
  `We occasionally have kittens available at various ages, including some that are over 14 weeks. Maine Coons are the largest domestic breed in Australia and they mature slowly over 4 to 5 years, so even the "older" ones are still very much kittens. They're typically affectionate at this stage and enjoy being part of family life.`,
  `${siteConfig.fullName} kittens are placed in pet homes only and are not offered for breeding. Our studs and queens have completed full DNA screening and are n/n for MYBPC (heart disease), PKD1 (kidney disease), PKLR (blood and liver related disease), and LIX1 (SMA). They also receive routine vet examinations and vaccination boosters.`,
  `Each kitten is registered at the vet, fully vaccinated with a vet book, and receives internal and external parasite treatments (worms, ticks and fleas). Every kitten is provided with pedigree papers and microchip transfer paperwork. ${siteConfig.fullName} is an ANCATS registered breeder, and our kittens are raised with love in our family home to help them settle easily into their new environment. With normal introductions, many adapt well to homes with other cats and dogs, and some take to lead training confidently as they grow.`,
  `For the health and safety of our cats, our cattery is closed to visitors, however we're happy to arrange FaceTime for genuine enquiries. If you're interested in a kitten, please get in touch and we can talk through current availability and timing.`,
];

export function ProductDetail({
  product,
  showJourney = false,
}: {
  product: Product;
  showJourney?: boolean;
}) {
  const category = product.categories[0];
  const [mainImage, ...thumbnails] = product.images;
  const firstThumbs = thumbnails.slice(0, 3);
  const remainingThumbs = thumbnails.slice(3);
  const journeyProfile = showJourney ? getJourneyProfile(product.id) : null;

  const infoRows = Object.entries(product.attributes)
    .filter(([key]) => INFO_LABELS[key])
    .map(([key, value]) => ({ label: INFO_LABELS[key], value }));

  return (
    <section className="bg-white py-14">
      <GalleryProvider images={product.images} alt={product.title}>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-3">
        <div className="order-2 lg:order-none">
          <h2 className="font-nav text-3xl font-bold text-nav-ink">
            Information:
          </h2>
          <div className="mt-3 border-t border-nav-ink/15" />

          <dl className="mt-2 font-nav text-nav-ink/90">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-nav-ink/10 py-3"
              >
                <dt className="font-bold text-nav-ink">{row.label}:</dt>
                <dd>{row.value}</dd>
              </div>
            ))}

            {category && (
              <div className="flex items-center justify-between gap-4 border-b border-nav-ink/10 py-3">
                <dt className="font-bold text-nav-ink">Category:</dt>
                <dd>
                  <Link href={`/${category.slug}`} className="text-nav-accent hover:underline">
                    {category.name}
                  </Link>
                </dd>
              </div>
            )}

            {product.price != null && (
              <div className="flex items-center justify-between gap-4 border-b border-nav-ink/10 py-3">
                <dt className="font-bold text-nav-ink">Price:</dt>
                <dd>${product.price.toLocaleString()}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="order-3 lg:order-none">
          <h2 className="font-nav text-3xl font-bold text-nav-ink">
            Description:
          </h2>
          <div className="mt-3 border-t border-nav-ink/15" />

          {product.description && (
            <div className="mt-4 font-body leading-relaxed text-nav-ink/90">
              {product.description
                .split("\n\n")
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p key={i} className={i > 0 ? "mt-4" : undefined}>
                    {paragraph}
                  </p>
                ))}
            </div>
          )}
        </div>

        <div className="order-1 self-start lg:order-none">
          {mainImage && (
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-nav-ink/5">
              <GalleryImage
                src={`/${mainImage.local_path}`}
                alt={product.title}
                index={0}
                sizes="(min-width: 1024px) 380px, 90vw"
              />
            </div>
          )}

          {firstThumbs.length > 0 && (
            <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-3">
              {firstThumbs.map((img, i) => (
                <div
                  key={img.local_path}
                  className="relative aspect-square overflow-hidden rounded-lg bg-nav-ink/5"
                >
                  <GalleryImage
                    src={`/${img.local_path}`}
                    alt={product.title}
                    index={i + 1}
                    sizes="(min-width: 1024px) 120px, 90vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {journeyProfile && (
          <div className="order-4 lg:order-none lg:col-span-3">
            <GrowthJourney profile={journeyProfile} />
          </div>
        )}

        <div className="order-5 lg:order-none lg:col-span-2">
          <CollapsibleNote
            title={`Note From ${siteConfig.fullName}`}
            paragraphs={NOTE_PARAGRAPHS}
          />
        </div>

        {remainingThumbs.length > 0 && (
          <div className="order-6 lg:order-none">
            <div className="grid grid-cols-1 gap-3 lg:sticky lg:top-24 lg:grid-cols-3">
              {remainingThumbs.map((img, i) => (
                <div
                  key={img.local_path}
                  className="relative aspect-square overflow-hidden rounded-lg bg-nav-ink/5"
                >
                  <GalleryImage
                    src={`/${img.local_path}`}
                    alt={product.title}
                    index={i + 1 + firstThumbs.length}
                    sizes="(min-width: 1024px) 120px, 90vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </GalleryProvider>
    </section>
  );
}
