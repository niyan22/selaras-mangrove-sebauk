import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mangrove-sebauk.vercel.app"),
  title: {
    default: "Mangrove Planting Program | KKN Berdampak 2026",
    template: "%s | Mangrove Planting Program"
  },
  description:
    "A premium environmental conservation website for the KKN Berdampak 2026 Mangrove Planting Program in Sebauk Village, Bengkalis, Riau, Indonesia.",
  keywords: [
    "mangrove planting",
    "Sebauk Village",
    "Bengkalis",
    "Riau",
    "KKN Berdampak 2026",
    "environmental conservation"
  ],
  openGraph: {
    title: "Mangrove Planting Program - KKN Berdampak 2026",
    description:
      "Restoring coastal resilience in Sebauk Village through education, planting, and community stewardship.",
    url: "https://mangrove-sebauk.vercel.app",
    siteName: "Mangrove Planting Program",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516399558788-81f8f8f3b8e6?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Mangrove forest canopy and coastal water"
      }
    ],
    locale: "en_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mangrove Planting Program - KKN Berdampak 2026",
    description:
      "A conservation initiative for Sebauk Village, Bengkalis, Riau, Indonesia."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
