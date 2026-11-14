import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

const VALUE_BLUE = "#1B3A6B";

function truncate(text: string, max: number) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

export function LitterCard({
  product,
  href,
  showDescription = true,
}: {
  product: Product;
  href: string;
  showDescription?: boolean;
}) {
  const { gender, born, sale_status: saleStatus, colour } = product.attributes;
  const image = product.images[0]?.local_path;

  return (
    <div className="flex h-full flex-col text-center">
      <Link href={href}>
        <div className="relative w-full border-8 border-white bg-white shadow-2xl transition-transform duration-300 ease-out hover:-rotate-2 hover:shadow-[0_35px_60px_-15px_rgba(42,21,16,0.45)]">
          <div className="relative aspect-square w-full overflow-hidden bg-nav-ink/5">
            {image && (
              <Image
                src={`/${image}`}
                alt={product.title}
                fill
                sizes="(min-width: 768px) 280px, 45vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </Link>

      <Link href={href}>
        <h3 className="mt-4 font-nav text-xl font-bold text-nav-ink">
          {product.title}
        </h3>
      </Link>

      <div className="mt-2 border-t border-nav-ink/15 pt-2 font-nav text-sm">
        {colour && (
          <p>
            <span className="font-bold text-nav-ink">Colour:</span>{" "}
            <span style={{ color: VALUE_BLUE }}>{colour}</span>
          </p>
        )}
        {gender && (
          <p>
            <span className="font-bold text-nav-ink">Gender:</span>{" "}
            <span style={{ color: VALUE_BLUE }}>{gender}</span>
          </p>
        )}
        {born && (
          <p>
            <span className="font-bold text-nav-ink">Born:</span>{" "}
            <span style={{ color: VALUE_BLUE }}>{born}</span>
          </p>
        )}
        {saleStatus && <p style={{ color: VALUE_BLUE }}>- {saleStatus} -</p>}
      </div>

      {showDescription && product.description && (
        <p className="mt-2 border-t border-nav-ink/15 pt-2 text-left font-nav text-sm leading-relaxed text-nav-ink">
          {truncate(product.description, 110)}
        </p>
      )}

      <div className="mt-auto pt-3">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(45deg,#2A1510_0%,#D97A3F_100%)] px-6 py-2.5 font-nav text-sm text-white transition-opacity hover:opacity-90"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
