"use client";
import Image from "next/image";
import Dyikt from "../../public/Logo.svg";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const Headerimage = () => {
  const { contrast } = useInvalidWidgetStore()
  return (
    <div>
      <Image
        className={`max-w-none w-auto h-[50px] md:h-[90px] object-contain  ${contrast ? "grayscale" : null} `}

        src={Dyikt}

        height={50}
        width={50}
        alt=""
      />
    </div>
  );
};
