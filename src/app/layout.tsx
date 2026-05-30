import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "TGAT Pharmacy Platform",
  description: "Premium TGAT Simulator for Thai Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-[#050b14] pt-16"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
