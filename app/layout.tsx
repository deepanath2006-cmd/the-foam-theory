import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE FOAM THEORY | Premium Doorstep Car Wash in Chennai",
  description:
    "THE FOAM THEORY delivers premium doorstep car wash services in Chennai — exterior wash, interior vacuum, and foam wash with professional care at your location.",
  keywords: [
    "car wash Chennai",
    "doorstep car wash",
    "premium car wash",
    "foam wash",
    "THE FOAM THEORY",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
