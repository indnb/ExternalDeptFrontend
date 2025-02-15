import React from 'react'

import tg from "@/public/FooterIcon/ic_sharp-telegram.svg";
import youtube from "@/public/FooterIcon/mdi_youtube.svg";
import inst from "@/public/FooterIcon/ri_instagram-line.svg";
import { FooterTopPanel } from '../FooterTopPanel';
export const Footer = () => {
  return (
    <div className="max-[850px]:h-[165px] bg-[#203C8F] w-[100vw]">
      <FooterTopPanel />
    </div>
  )
}
