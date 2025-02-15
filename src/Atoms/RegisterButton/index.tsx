import React from 'react'
import "./style.css"

export interface IRegisterButton {
  img: any;
  text: string;
  callback: () => void;
}
export const RegisterButton: React.FC<IRegisterButton> = ({ img, text, callback }) => {
  return (
    <button className="regButton w-[399px] h-[314px] max-[850px]:w-[191px] max-[1300px]:h-[248px] max-[1300px]:w-[298px] transition max-[850px]:h-[150px] border-2 border-black  rounded-[8px] flex items-center justify-center flex-col " onClick={callback}>
      {img}
      <h1 className='text-[calc(23/1552*100vw) max-[850px]:text-[12px] text-black max-[1300px]:mt-[24px] max-[850px]:mt-[16px]  transition'>{text}</h1>
    </button>
  );
};

