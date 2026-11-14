import Link from "next/link";
import type { ReactNode } from "react";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group/link relative flex h-full items-center font-nav text-[18px] font-normal text-nav-ink transition-colors duration-100 hover:text-nav-ink-hover"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2.5 left-0 h-1 w-0 bg-nav-accent transition-all duration-300 ease-in-out group-hover/link:w-full"
      />
      {children}
    </Link>
  );
}
