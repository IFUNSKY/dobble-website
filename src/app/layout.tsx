import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dobble — The Complete Spend Management Platform",
  description:
    "Dobble combines corporate cards, expense management, procurement workflows, vendor hub, budgets, and real-time analytics — one platform for complete business spend control.",
  keywords: "expense management, corporate cards, procurement, spend management, vendor management, budget control, Nigeria",
  openGraph: {
    title: "Dobble — The Complete Spend Management Platform",
    description: "Corporate cards, expense management, procurement, vendor hub, and budgets. All in one place.",
    type: "website",
    url: "https://dobble.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
