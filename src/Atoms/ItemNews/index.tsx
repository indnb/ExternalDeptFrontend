import React from "react";
export interface IItemNews {
  title: stirng;
}
export const ItemNews: React.FC<IItemNews> = ({ title }) => {
  return (
    <div
      style={{ display: "flex" }}
      className="h-[435px] flex flex-col items-start justify-between max-[850px]:h-[225px] max-[850px]:w-[299px] ml-[16px] mr-[16px]"
    >
      <div className=" w-[555px] h-[376px] bg-[#203C8F] max-[850px]:w-[299px] max-[*50px]:h-[191px] rounded-[16px]"></div>
      <p
        className="block  font-bold  text-black text-[16px] text-left mt-[8px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {title}
      </p>
    </div>
  );
};
