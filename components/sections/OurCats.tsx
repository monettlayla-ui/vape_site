import { CatCard } from "./CatCard";

const KINGS = [
  {
    name: "Blanco",
    image: "/categories/studs/products/blanco/images/01.jpg",
    href: "/our-coons/studs/blanco",
  },
  {
    name: "Eminem Marshall",
    image: "/categories/studs/products/eminem-marshall/images/01.jpg",
    href: "/our-coons/studs/eminem-marshall",
  },
  {
    name: "Kustodiev",
    image: "/categories/studs/products/kustodiev/images/01.jpg",
    href: "/our-coons/studs/kustodiev",
  },
  {
    name: "Prince Azor",
    image: "/categories/studs/products/prince-azor/images/01.jpg",
    href: "/our-coons/studs/prince-azor",
  },
  {
    name: "Rocco",
    image: "/categories/studs/products/rocco/images/01.jpg",
    href: "/our-coons/studs/rocco",
  },
  {
    name: "Thunda",
    image: "/categories/studs/products/thunda/images/01.jpg",
    href: "/our-coons/studs/thunda",
  },
];

const QUEENS = [
  {
    name: "Chloe",
    image: "/categories/queens/products/chloe/images/01.jpg",
    href: "/our-coons/queens/chloe",
  },
  {
    name: "Gale",
    image: "/categories/queens/products/gale/images/01.png",
    href: "/our-coons/queens/gale",
  },
  {
    name: "Gimaine Aphrodite",
    image: "/categories/queens/products/gimaine-aphrodite/images/01.jpg",
    href: "/our-coons/queens/gimaine-aphrodite",
  },
  {
    name: "Jeff",
    image: "/categories/queens/products/jeff/images/01.jpg",
    href: "/our-coons/queens/jeff",
  },
  {
    name: "Oceans Breeze",
    image: "/categories/queens/products/oceans-breeze/images/01.jpg",
    href: "/our-coons/queens/oceans-breeze",
  },
  {
    name: "Phoebe",
    image: "/categories/queens/products/phoebe/images/01.jpg",
    href: "/our-coons/queens/phoebe",
  },
  {
    name: "Princess Angelica",
    image: "/categories/queens/products/princess-angelica/images/01.jpg",
    href: "/our-coons/queens/princess-angelica",
  },
  {
    name: "Princess Leia",
    image: "/categories/queens/products/princess-leia/images/01.jpg",
    href: "/our-coons/queens/princess-leia",
  },
];

export function OurCats() {
  return (
    <section className="bg-[linear-gradient(#f7f7f7,white_200px)] py-16 md:py-24">
      <div className="w-full px-6 text-center">
        <h2 className="bg-[linear-gradient(-45deg,#2A1510_0%,#D97A3F_40%,#2A1510_100%)] bg-clip-text font-script text-6xl text-transparent md:text-7xl">
          Our Cats
        </h2>

        <p className="mx-auto mt-6 max-w-[900px] font-nav text-lg leading-relaxed text-nav-ink/90">
          Explore our available kittens, meet our studs and queens, browse our
          gallery, or contact us to register your interest. If you&apos;re
          searching for a Maine Coon cat in Australia and want a
          Brisbane-based breeder with Australia-wide options, we&apos;re here
          to help.
        </p>
      </div>

      <div className="relative mt-14 w-full">
        <div className="h-px w-full bg-nav-ink/15" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nav-accent" />
      </div>

      <div className="relative mt-14 grid w-full grid-cols-1 gap-12 px-6 md:grid-cols-2">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-nav-ink/15 md:block"
        />

        <div className="text-center md:pr-12">
          <p className="font-nav text-lg text-nav-accent">A Showcase of</p>
          <h3 className="mt-1 font-nav text-4xl font-bold text-nav-ink md:text-5xl">
            Our Kings
          </h3>
          <p className="mt-4 font-nav text-lg leading-relaxed text-nav-ink/90">
            Meet our studs, the males at the heart of our breeding program.
            Each is valued for temperament, health standards, and the strong
            Maine Coon features we aim to maintain.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
            {KINGS.map((cat) => (
              <CatCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>

        <div className="text-center md:pl-12">
          <p className="font-nav text-lg text-nav-accent">A Showcase of</p>
          <h3 className="mt-1 font-nav text-4xl font-bold text-nav-ink md:text-5xl">
            Our Queens
          </h3>
          <p className="mt-4 font-nav text-lg leading-relaxed text-nav-ink/90">
            Meet our queens, the mothers of our litters and the heart of our
            home. Each queen is selected with a focus on temperament,
            wellbeing, and the confident nature we love to see in our
            kittens.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
            {QUEENS.map((cat) => (
              <CatCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-14 w-full">
        <div className="h-px w-full bg-nav-ink/15" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nav-accent" />
      </div>
    </section>
  );
}
