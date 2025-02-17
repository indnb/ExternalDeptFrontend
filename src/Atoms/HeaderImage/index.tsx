"use client";
import Image from "next/image";
import Dyikt from "../../public/Logo.svg";

export const Headerimage = () => {
  return (
    <div>
      <Image
        className="max-w-none w-auto h-[50px] md:h-[90px] object-contain"
        src={Dyikt.src}
        height={50}
        width={50}
        alt=""
      />
    </div>
  );
};
