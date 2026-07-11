import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mangrove-sebauk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Program Penanaman Mangrove | KKN Berdampak 2026",
    template: "%s | Program Penanaman Mangrove"
  },
  description:
    "Website konservasi lingkungan untuk Program Penanaman Mangrove KKN Berdampak 2026 di Desa Sebauk, Bengkalis, Riau, Indonesia.",
  keywords: [
    "penanaman mangrove",
    "Desa Sebauk",
    "Bengkalis",
    "Riau",
    "KKN Berdampak 2026",
    "konservasi lingkungan",
    "restorasi pesisir"
  ],
  openGraph: {
    title: "Program Penanaman Mangrove - KKN Berdampak 2026",
    description:
      "Memulihkan ketahanan pesisir Desa Sebauk melalui edukasi, penanaman, dan pelestarian bersama masyarakat.",
    url: siteUrl,
    siteName: "Program Penanaman Mangrove Sebauk",
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Penanaman Mangrove - KKN Berdampak 2026",
    description: "Inisiatif konservasi untuk Desa Sebauk, Bengkalis, Riau, Indonesia."
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Program Penanaman Mangrove - KKN Berdampak 2026 Sebauk",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "Program restorasi pesisir dan penanaman mangrove di Desa Sebauk, Bengkalis, Riau, Indonesia, dijalankan oleh tim KKN Berdampak 2026.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sebauk",
    addressRegion: "Riau",
    addressCountry: "ID"
  },
  email: "kkn.sebauk@example.org"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
