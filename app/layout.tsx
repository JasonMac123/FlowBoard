import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "Collaborate, manage projects, and increase your producitivity",
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-slate-100 h-full", inter.className)}>
        <ClerkProvider>
          <NavBar />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
