import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppQuickAccess from "@/components/contact/WhatsAppQuickAccess";
import { school } from "@/data/schoolData";
import "./globals.css";

const publicSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
const siteUrl = new URL(publicSiteUrl);
const siteDescription = `${school.name} (${school.npsn}) — ${school.mottoFull}. ${school.address}`;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: siteUrl,
  title: {
    default: school.name,
    template: `%s | ${school.shortName}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: school.shortName,
    title: school.name,
    description: siteDescription,
    images: [
      {
        url: "/tampak-depan.jpg",
        alt: `Gedung ${school.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: school.name,
    description: siteDescription,
    images: ["/tampak-depan.jpg"],
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: school.name,
    alternateName: school.shortName,
    identifier: {
      "@type": "PropertyValue",
      propertyID: "NPSN",
      value: school.npsn,
    },
    url: siteUrl.origin,
    logo: new URL("/SMKN_4_KOTA_BEKASI.png", siteUrl).toString(),
    image: new URL("/tampak-depan.jpg", siteUrl).toString(),
    email: school.email,
    telephone: "+622129064472",
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address,
      addressLocality: school.city,
      addressRegion: "Jawa Barat",
      postalCode: "17434",
      addressCountry: "ID",
    },
    employee: {
      "@type": "Person",
      name: school.greeting.name,
      jobTitle: school.greeting.role,
    },
  };

  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-slate-body">
        <Link
          href="#konten-utama"
          className="absolute left-4 top-4 z-[60] -translate-y-24 rounded-full bg-sky-100 px-5 py-3 text-sm font-semibold text-navy-deep focus:translate-y-0 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
        >
          Loncat ke konten utama
        </Link>
        <Navbar />
        <main id="konten-utama" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppQuickAccess />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
