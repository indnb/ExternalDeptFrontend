import React from "react";
import tg from "@/public/footerIcon/ic_sharp-telegram.svg";
import youtube from "@/public/footerIcon/mdi_youtube.svg";
import inst from "@/public/footerIcon/ri_instagram-line.svg";
import Image from "next/image";
export const FooterTop = () => {
  const img = [youtube, inst, tg];
  return (
    <div className="max-[850px]:h-[82px] w-[100vvw]">
      <div></div>
      <div>
        {img.map((elem) => (
          <Image src={elem} alt="" />
        ))}
      </div>
    </div>
  );
};
