import { AvailableKittens } from "@/components/sections/AvailableKittens";
import { Hero } from "@/components/sections/Hero";
import { KittenTransport } from "@/components/sections/KittenTransport";
import { OurCats } from "@/components/sections/OurCats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Welcome } from "@/components/sections/Welcome";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Welcome />
      <OurCats />
      <AvailableKittens />
      <KittenTransport />
      <Testimonials />
    </main>
  );
}
