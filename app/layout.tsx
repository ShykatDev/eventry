import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Eventry",
  description:
    "Eventry is an event management platform that simplifies event planning and organization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased dark`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
