import React from "react";
import { IAboutUsData } from "@/type/IAboutUsData";
import Image from "next/image";

export const ItemAboutUs = ({ data }: { data: IAboutUsData }) => {
  return (
    <div className="max-[850px]:w-[314px] max-[850px]:h-[191px]">
      <Image
        className="max-[850px]:w-[154px] max-[850px]:h-[191px] object-fit"
        src={data.img}
        alt=""
      />
      <div>
        <h1></h1>
      </div>
    </div>
  );
};
