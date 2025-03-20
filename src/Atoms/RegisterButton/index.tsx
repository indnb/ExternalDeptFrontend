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
  const { contrast } = useInvalidWidgetStore()
  return (
    <button className={`regButton w-[399px] ${contrast ? "regButtonContrast" : null}  h-[314px] max-lg:w-[191px] max-xl:h-[248px] max-xl:w-[298px] transition max-lg:h-[150px] border-2 border-black  rounded-[8px] flex items-center justify-center flex-col `} onClick={callback}>
      {img}
      <h1 className='text-[calc(23/1552*100vw) max-lg:text-[12px] text-black max-xl:mt-[24px] max-lg:mt-[16px]  transition'>{text}</h1>
    </button>
  );
};

