import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import React from "react";
export interface IItemNews {
  isActive: boolean;

  title: string;
}
export const ItemNews: React.FC<IItemNews> = ({ title, isActive }) => {
  const { contrast, fontSize } = useInvalidWidgetStore()

  return (
    <div className="flex justify-center items-center w-[100%] max-[850px]:h-[200px] h-[500px] flex-col">
      <div className={`${contrast ? "bg-[#414141]" : ""} max-[850px]:h-[90px] w-[300px] h-[300px] max-[850px]:w-[90px] rounded-[4px] bg-[#203C8F] ${isActive ? 'active' : 'not-active'}`}>
      </div>
      <h1
        style={{ fontFamily: "Montserrat" }}
        className={`${isActive ? fontSize ? "active-text text-bigger" : "active-text" : 'not-active'} h-[15px]  text-[0px] max-[850px]:mt-[12px] mt-[30px]`}
      >
        {title}
      </h1>
    </div>

  );
};
