"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import Menu from "./Menu";
import Logo from "./Logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-8">
            <Logo />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-sm text-white hover:text-gray-400 transition-colors"
            >
              [MENU]
            </button>
          </nav>
        </div>
      </header>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
