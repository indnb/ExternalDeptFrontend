import Image from 'next/image';
import React from 'react'

export interface IRegisterButton {
  img: string;
  text: string;
  callback: () => void;
}
export const RegisterButton: React.FC<IRegisterButton> = ({ img, text, callback }) => {
  return (
    <button className="max-[850px]:w-[191px] max-[850px]:h-[150px]   " onClick={callback}>
      <Image src={img} alt="button icon" />
      <span className='text-[calc(23/1552*100vw) max-[850px]:text-[12px] text-black'>{text}</span>
    </button>
  );
};

