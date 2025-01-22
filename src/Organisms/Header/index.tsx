"use client";

import HeaderButtones from "src/Molecules/HeaderButtones";
import React from "react";
import { HeaderDyikt } from "@/Molecules/HeaderDyikt";

const Header: React.FC = () => {
    return (
        <header className="max-w-none w-full h-[80px] bg-white border-2 border-grey flex items-center justify-between px-4 md:h-[141px]">
            <HeaderDyikt />
            <HeaderButtones />
        </header>
    );
};

export default Header;
