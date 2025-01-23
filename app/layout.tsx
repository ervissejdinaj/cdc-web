import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootLayoutClient from "./components/RootLayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Dolce Casa - Interior Design Studio",
  description: "Minimalist interior design and architectural solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
