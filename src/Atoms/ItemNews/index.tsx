import React from "react";
export interface IItemNews {
  title: string;
}
export const ItemNews: React.FC<IItemNews> = ({ title }) => {
  return (
    <div
      style={{ display: "flex" }}
      className="h-[435px] flex flex-col items-start justify-between max-[850px]:h-[225px] max-[850px]:w-[299px] mr-[30px] ml-[30px] max-[850px]:ml-[16px] max-[850px]:mr-[16px]"
    >
      <div className=" w-[555px] h-[376px] bg-[#203C8F] max-[850px]:w-[299px] max-[*50px]:h-[191px] rounded-[16px]"></div>
      <p
        className="block  font-bold  text-black text-[28px] max-[850px]:text-[16px] text-left mt-[8px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {title}
      </p>
    </div>
  );
};
