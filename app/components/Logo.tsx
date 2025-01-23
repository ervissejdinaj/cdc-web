"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";

interface LogoProps {
  href?: string;
}

export default function Logo({
  href = "/assets/images/cdc-logo1.png",
}: LogoProps = {}) {
  const scrollPosition = useScrollPosition();
  const logoSize = scrollPosition > 50 ? 50 : 80;

  return (
    <Link
      href="/"
      className={`flex items-center mt-2 transition-all duration-300 ease-in-out`}
    >
      <Image
        src={href}
        alt="CDC Logo"
        width={logoSize}
        height={logoSize}
        className="mr-2 transition-all duration-300"
      />
    </Link>
  );
}
