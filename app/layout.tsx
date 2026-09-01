import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.studiokjellemo.com"),
  title: {
    default: "Studio Kjellemo — Freelance Designer | Web, Brand & Visual Design",
    template: "%s | Studio Kjellemo",
  },
  description:
    "Studio Kjellemo is a freelance design studio by Sara Kjellemo, based in Smögen, Sweden. Specialising in web design, branding, visual content and graphic design — working remotely worldwide and locally in Gothenburg and Stockholm.",
  keywords: [
    "freelance designer Sweden",
    "web designer Smögen",
    "brand designer Gothenburg",
    "graphic designer Stockholm",
    "visual identity Sweden",
    "remote designer",
    "webbdesign Sverige",
    "grafisk design",
    "varumärkesidentitet",
    "Studio Kjellemo",
    "Sara Kjellemo",
    "Sotenäs",
    "Bohuslän",
  ],
  authors: [{ name: "Sara Kjellemo" }],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Studio Kjellemo",
    title: "Studio Kjellemo — Freelance Designer | Web, Brand & Visual Design",
    description:
      "Freelance design studio based in Smögen, Sweden. Web design, branding, visual content and graphic design — working remotely worldwide.",
    url: "https://www.studiokjellemo.com/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Kjellemo — Freelance Designer | Web, Brand & Visual Design",
    description:
      "Freelance design studio based in Smögen, Sweden. Web design, branding, visual content and graphic design — working remotely worldwide.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://www.studiokjellemo.com/",
    languages: {
      en: "https://www.studiokjellemo.com/",
      sv: "https://www.studiokjellemo.com/sv/",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService", "DesignCompany"],
      "@id": "https://www.studiokjellemo.com/#business",
      name: "Studio Kjellemo",
      description:
        "Freelance design studio specialising in web design, branding & identity, visual content and graphic design. Based in Smögen, Sweden — working remotely worldwide.",
      url: "https://www.studiokjellemo.com/",
      logo: "https://www.studiokjellemo.com/images/logo-black.png",
      image: "https://www.studiokjellemo.com/images/og-image.png",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "Sara Kjellemo",
        jobTitle: "Freelance Designer",
        sameAs: ["https://www.instagram.com/studiokjellemo/"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Smögen",
        addressRegion: "Västra Götaland",
        postalCode: "456 51",
        addressCountry: "SE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 58.3536,
        longitude: 11.2281,
      },
      areaServed: [
        { "@type": "City", name: "Smögen" },
        { "@type": "City", name: "Gothenburg" },
        { "@type": "City", name: "Stockholm" },
        { "@type": "Country", name: "Sweden" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      knowsLanguage: ["sv", "en"],
      sameAs: ["https://www.instagram.com/studiokjellemo/"],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studiokjellemo.com/#website",
      url: "https://www.studiokjellemo.com/",
      name: "Studio Kjellemo",
      inLanguage: ["en", "sv"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet" />
        <meta name="geo.region" content="SE-O" />
        <meta name="geo.placename" content="Smögen, Sotenäs, Sweden" />
        <meta name="geo.position" content="58.3536;11.2281" />
        <meta name="ICBM" content="58.3536, 11.2281" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
