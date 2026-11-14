import Image from "next/image";
import Link from "next/link";

export function CatCard({
  name,
  image,
  href,
  ctaLabel = "Learn more",
  showArrow = true,
  bold = true,
}: {
  name: string;
  image: string;
  href: string;
  ctaLabel?: string;
  showArrow?: boolean;
  bold?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-full border-8 border-white bg-white shadow-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_35px_60px_-15px_rgba(42,21,16,0.45)]">
        <div className="relative aspect-square w-full overflow-hidden bg-nav-ink/5">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 768px) 260px, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      <h4
        className={`mt-5 font-nav text-nav-ink ${
          bold ? "text-2xl font-bold" : "text-lg"
        }`}
      >
        {name}
      </h4>

      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-nav-ink px-6 py-3 font-nav text-base text-white transition-opacity hover:opacity-90"
      >
        {ctaLabel} {showArrow && <span aria-hidden="true">&rarr;</span>}
      </Link>
    </div>
  );
}
