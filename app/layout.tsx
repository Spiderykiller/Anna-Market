import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import "./globals.css";
import Navbarpage from "@/components/Navbar";
import PageTransition from "@/components/Pagetransition";
import { ThemeProvider } from "@/components/Themeprovider";
import ThemeWrapper from "@/components/Themewrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anna Market | Modern Furniture & Home Decor in Addis Ababa",
    template: "%s | Anna Market",
  },
  description:
    "Shop modern furniture, home decor, and kitchen essentials in Addis Ababa, Ethiopia. Anna Market offers curated lifestyle products delivered across Ethiopia.",
  keywords: [
    "furniture Addis Ababa",
    "modern furniture Ethiopia",
    "buy sofa Ethiopia",
    "home decor Addis Ababa",
    "kitchen essentials Ethiopia",
    "bedroom furniture Ethiopia",
    "Anna Market",
    "የቤት እቃዎች አዲስ አበባ",
  ],
  authors: [{ name: "Anna Market" }],
  creator: "Anna Market",
  metadataBase: new URL("https://anna-market-659b.vercel.app"),
  openGraph: {
    title: "Anna Market | Modern Furniture & Home Decor in Addis Ababa",
    description:
      "Curated furniture and home lifestyle products in Addis Ababa, Ethiopia. Style your space with Anna Market.",
    url: "https://anna-market-659b.vercel.app",
    siteName: "Anna Market",
    locale: "en_ET",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Market | Furniture & Home Decor Ethiopia",
    description:
      "Modern furniture and home decor in Addis Ababa. Shop Anna Market for curated lifestyle products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <BootstrapClient />
         <ThemeWrapper>
          <PageTransition>
            <Navbarpage />
            {children}
          </PageTransition>
         </ThemeWrapper>
      </body>
    </html>
  );
}
