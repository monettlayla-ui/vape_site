export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const leftNavLinks: NavItem[] = [
  { label: "Current Litters", href: "/current-litters" },
  {
    label: "Our Maine Coons",
    href: "/our-coons",
    children: [
      { label: "Studs", href: "/our-coons/studs" },
      { label: "Queens", href: "/our-coons/queens" },
      { label: "Graduates", href: "/our-coons/graduates" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
];

export const rightNavLinks: NavItem[] = [
  { label: "Their Journey", href: "/from-fluff-to-full-grown" },
  { label: "Our Process", href: "/our-process" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Contact", href: "/contact-us" },
];
