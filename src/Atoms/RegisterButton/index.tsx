"use client"
import React from 'react'
import "./style.css"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';

export interface IRegisterButton {
  img: any;
  text: string;
  callback: () => void;
}
export const RegisterButton: React.FC<IRegisterButton> = ({ img, text, callback }) => {
  const { contrast, fontFamily } = useInvalidWidgetStore()
  return (
    <button className={`regButton w-[399px] 
${contrast ? "regButtonContrast" : null}  h-[314px] w-[400px] max-lg:w-[191px]   max-lg:h-[150px] max-sm:w-[161px]   max-sm:h-[140px] transition  border-2 border-black  rounded-[8px] flex items-center justify-center flex-col `}
      onClick={callback}>
      {img}
      <h1 className={` ${fontFamily ? "font-kyivSerif" : ""}
 text-[calc(23/1552*100vw) max-lg:text-[12px] text-black mt-[24px]  max-lg:mt-[16px] max-sm:mt-[0px]  transition`}>{text}</h1>
    </button>
  );
};

