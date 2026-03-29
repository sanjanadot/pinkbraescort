import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Escorts In Mumbai | #1 Premium VIP Service - Pink Bra",
  description:
    "Mumbai's #1 Premium Escort Service with 5000+ Verified Escorts. VIP Models, Celebrity Escorts & Russian Girls available 24/7. Book Now!",
  keywords:
    "escorts mumbai, mumbai escorts, escort service mumbai, vip escorts mumbai, russian escorts mumbai, celebrity escorts mumbai",
  openGraph: {
    title: "Escorts In Mumbai | #1 Premium VIP Service - Pink Bra",
    description:
      "Mumbai's #1 Premium Escort Service with 5000+ Verified Escorts. VIP Models, Celebrity Escorts & Russian Girls available 24/7.",
    url: "https://pinkbraescort.in/",
    siteName: "Pink Bra Escorts Mumbai",
    images: [
      {
        url: "https://pinkbraescort.in/images/services/default-escort.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  metadataBase: new URL("https://pinkbraescort.in"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
