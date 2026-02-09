import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

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
    default: "StrangeFx | Turning ideas into Visuals",
    template: "%s | StrangeFx",
  },
  description:
    "StrangeFx — Your Vision, My Creation. Creative studio specializing in graphic design, video editing, motion graphics, and modern web development.",

  metadataBase: new URL("https://strangefx.in"),

  openGraph: {
    title: "StrangeFx | Your Vision, My Creation",
    description:
      "Creative studio specializing in graphic design, video editing, motion graphics, and modern web development.",
    url: "https://strangefx.in",
    siteName: "StrangeFx",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "StrangeFx | Your Vision, My Creation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "StrangeFx | Your Vision, My Creation",
    description:
      "Creative studio specializing in graphic design, video editing, motion graphics, and modern web development.",
    images: ["/og.JPG"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <PreloaderWrapper>{children}</PreloaderWrapper>
      </body>
    </html>
  );
}
