import Link from "next/link";

export function PageHeader({
  title,
  breadcrumb,
  align = "center",
}: {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  align?: "center" | "left";
}) {
  const isLeft = align === "left";

  return (
    <section
      className={`bg-[#f7f7f7] py-14 ${isLeft ? "text-left" : "text-center"}`}
    >
      <div className={isLeft ? "mx-auto max-w-[1200px] px-6" : undefined}>
        <h1 className="bg-[linear-gradient(-45deg,#2A1510_0%,#D97A3F_40%,#2A1510_100%)] bg-clip-text font-script text-5xl text-transparent md:text-6xl">
          {title}
        </h1>

        <nav aria-label="Breadcrumb" className="mt-4 font-nav">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label}>
              {i > 0 && <span className="mx-2 text-nav-accent">&gt;</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="text-nav-ink/50 hover:underline">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-bold text-nav-ink">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
