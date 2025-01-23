"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Menu from "./Menu";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="fixed w-full z-50">
        <nav className="container mx-auto flex items-center justify-between py-8 px-4">
          <Link href="/" className="text-white text-sm">
            [CDC]
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white text-sm hover:text-gray-400 transition-colors"
          >
            [MENU]
          </button>
        </nav>
      </header>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {children}
      <Footer />
    </div>
  );
}
