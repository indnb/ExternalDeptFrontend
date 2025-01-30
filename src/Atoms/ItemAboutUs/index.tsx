import React from "react";
import { IAboutUsData } from "@/type/IAboutUsData";
import Image from "next/image";

export const ItemAboutUs = ({ data }: { data: IAboutUsData }) => {
  return (
    <div className="max-[850px]:w-[314px] max-[850px]:h-[191px] flex bg-[white]">
      <Image
        className="max-[850px]:w-[154px] max-[850px]:h-[191px] object-fit"
        src={data.img}
        alt=""
      />
      <div>
        <h1>{data.name}</h1>
        <p>{data.text}</p>
      </div>
    </div>
  );
};
