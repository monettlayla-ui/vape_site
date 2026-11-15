import type { Metadata } from "next";
import { Berkshire_Swash, Geist, Geist_Mono, Lato, Lora } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const berkshireSwash = Berkshire_Swash({
  variable: "--font-berkshire",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_DESCRIPTION =
  "Gentle Maine Coons is a Brisbane-based breeder of pedigree European Giant Maine Coon kittens, with safe Australia-wide transport. Browse current litters, meet our studs and queens, and learn about our health-tested breeding program.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Maine Coon Kittens for Sale in Brisbane, Australia",
    template: `%s | ${siteConfig.fullName}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Maine Coon kittens Brisbane",
    "Maine Coon breeder Australia",
    "Maine Coon kittens for sale",
    "European Giant Maine Coon",
    "pedigree Maine Coon kittens",
    "Maine Coon cattery Brisbane",
  ],
  authors: [{ name: siteConfig.fullName }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: siteConfig.fullName,
    title: "Maine Coon Kittens for Sale in Brisbane, Australia",
    description: SITE_DESCRIPTION,
    url: siteConfig.siteUrl,
    images: ["/categories/gallery/images/Gimainecoons-01.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maine Coon Kittens for Sale in Brisbane, Australia",
    description: SITE_DESCRIPTION,
    images: ["/categories/gallery/images/Gimainecoons-01.jpg"],
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: siteConfig.fullName,
  description: SITE_DESCRIPTION,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneTel,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.locationCity,
    addressRegion: siteConfig.locationState,
    postalCode: siteConfig.locationPostcode,
    addressCountry: siteConfig.locationCountry,
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${berkshireSwash.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={businessJsonLd} />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
