import React from "react";
export interface IItemNews {
  title: stirng;
}
export const ItemNews: React.FC<IItemNews> = ({ title }) => {
  return (
    <div
      style={{ display: "flex" }}
      className="flex flex-col items-start justify-between max-[650px]:h-[225px] max-[650px]:w-[299px] ml-[16px] mr-[16px]"
    >
      <div className="bg-[#203C8F] max-[650px]:w-[299px] max-[650px]:h-[191px] rounded-[16px]"></div>
      <p
        className="block  font-bold  text-black text-[16px] text-left mt-[8px]"
        style={{ fontFamily: "Montserrat" }}
      >
        {title}
      </p>
    </div>
  );
};
