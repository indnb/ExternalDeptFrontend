"use client";

import HeaderButtones from "src/Molecules/HeaderButtones";
import React, { useState, useEffect } from "react";
import { HeaderDyikt } from "@/Molecules/HeaderDyikt";

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[70px] md:h-[120px] bg-white border-2 border-grey flex items-center justify-between px-4 transition-transform duration-300 z-50 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <HeaderDyikt />
      <HeaderButtones />
    </header>
  );
};

export default Header;
