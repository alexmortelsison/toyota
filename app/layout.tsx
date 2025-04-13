import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SessionWrapper from "./components/SessionWrapper";
import ProviderWrapper from "@/components/ui/ProviderWrapper";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "New Cars, Trucks, SUVs & Hybrids | Toyota Official Site",
  description: "website for toyota cars, suvs, trucks & hybrids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased select-none`}
      >
        <ProviderWrapper>
          <SessionWrapper>
            <Navbar />
            {children}
            <Footer />
          </SessionWrapper>
        </ProviderWrapper>
      </body>
    </html>
  );
}
