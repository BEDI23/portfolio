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
  title: "BEDINADE Josue — Développeur Full Stack",
  description:
    "Portfolio de BEDINADE Josue, développeur Full Stack passionné par PHP Symfony et Flutter. Basé à Lomé, Togo.",
  openGraph: {
    title: "BEDINADE Josue — Développeur Full Stack",
    description: "Portfolio de BEDINADE Josue — PHP Symfony | Flutter",
    url: "https://github.com/BEDI23",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0f] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
