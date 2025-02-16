import React from "react";
import { IAboutUsData } from "@/type/IAboutUsData";
import Image from "next/image";

export const ItemAboutUs = ({ data }: { data: IAboutUsData }) => {
  return (
    <div
      style={{
        boxShadow: "2px -4px 3px 1px rgba(173, 159, 173, 0.35)",
      }}
      className="w-[721px] h-[472px]
      max-[850px]:w-[314px] max-[850px]:h-[191px] flex bg-[white] ml-[20px] items-center justify-start rounded-[8px] "
    >
      <Image
        className="w-[350px] h-[472px]
        max-[850px]:w-[154px] max-[850px]:h-[191px] object-fit rounded-[4px]"
        src={data.img}
        alt=""
      />
      <div className="text-[black] h-[auto] ml-[20px] max-[850px]:ml-[10px]">
        <h1
          className="text-[38px] max-[850px]:text-[16px] text-[center]"
          style={{ fontFamily: "Montserrat" }}
        >
          {data.name}
        </h1>
        <p
          style={{ fontFamily: "Montserrat" }}
          className="max-[850px]:text-[11px] text-[center]"
        >
          {data.text}
        </p>
      </div>
    </div>
  );
};
