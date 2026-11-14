"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { XIcon } from "@/components/icons/XIcon";
import { leftNavLinks, rightNavLinks, type NavItem } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { NavLink } from "./NavLink";

function NavItemWithDropdown({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return <NavLink href={item.href}>{item.label}</NavLink>;
  }

  return (
    <div className="group/nav relative h-full">
      <NavLink href={item.href}>{item.label}</NavLink>
      <div className="invisible absolute left-1/2 top-full z-20 w-48 -translate-x-1/2 translate-y-1 rounded-sm bg-white py-2 opacity-0 shadow-lg transition-all duration-150 ease-in-out group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="block px-5 py-2 font-nav text-[16px] text-nav-ink transition-colors hover:text-nav-accent"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Logo({
  className,
  scrolled = false,
}: {
  className?: string;
  scrolled?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.fullName} — home`}
      className={className}
    >
      <LogoMark
        className={`h-[128px] w-[120px] origin-top transition-transform duration-300 ease-out md:h-[170px] md:w-[160px] ${
          scrolled ? "scale-75" : "scale-100"
        }`}
      />
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y > lastY && y > 100) {
        setHidden(true);
      } else if (y < lastY) {
        setHidden(false);
      }
      lastY = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-transform duration-300 ease-in-out ${
          hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`relative mx-auto flex max-w-[1400px] items-center justify-end bg-white px-4 transition-[min-height] duration-300 md:hidden ${
            scrolled ? "min-h-[56px]" : "min-h-[76px]"
          }`}
        >
          <Logo scrolled={scrolled} className="absolute left-1/2 top-0 z-10 -translate-x-1/2" />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-nav-ink"
          >
            <MenuIcon open={mobileOpen} className="h-6 w-6" />
          </button>
        </div>

        <nav
          className={`relative mx-auto hidden max-w-[1400px] items-center justify-center bg-white px-6 transition-[min-height] duration-300 md:flex ${
            scrolled ? "min-h-[56px]" : "min-h-[76px]"
          }`}
        >
          <div className="flex flex-1 items-center justify-center gap-10">
            <Link
              href="/"
              aria-label="Home"
              className="flex h-full items-center text-nav-ink"
            >
              <HomeIcon className="h-5 w-5" />
            </Link>
            {leftNavLinks.map((item) => (
              <NavItemWithDropdown key={item.href} item={item} />
            ))}
          </div>

          {/* reserves the central gap; the real logo is absolutely positioned
              below so it never affects this row's height */}
          <div aria-hidden="true" className="w-[180px] shrink-0" />

          <div className="flex flex-1 items-center justify-center gap-10">
            {rightNavLinks.map((item) => (
              <NavItemWithDropdown key={item.href} item={item} />
            ))}
          </div>

          <Logo scrolled={scrolled} className="absolute left-1/2 top-0 z-10 -translate-x-1/2" />
        </nav>
      </div>

      {mobileOpen && (
        <nav className="fixed inset-0 z-50 flex flex-col items-center overflow-hidden bg-white px-6 pb-16 pt-16 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="fixed right-4 top-4 z-[60] flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-nav-ink text-white shadow-md"
          >
            <XIcon className="h-6 w-6" />
          </button>

          <Link
            href="/"
            aria-label="Home"
            onClick={() => setMobileOpen(false)}
            className="text-nav-accent"
          >
            <HomeIcon className="h-6 w-6" />
          </Link>

          <div className="mt-5 flex flex-col items-center gap-4">
            {[...leftNavLinks, ...rightNavLinks].map((item) => (
              <div key={item.href} className="flex flex-col items-center gap-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-nav text-[17px] text-nav-ink"
                >
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="flex flex-col items-center gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-nav text-[15px] text-nav-ink/80"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
