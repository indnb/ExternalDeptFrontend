import React from 'react'

export interface IRegisterButton {
  img: string;
  text: string;
  callback: () => void;
}
export const RegisterButton: React.FC<IRegisterButton> = ({ img, text, callback }) => {
  return (
    <button onClick={callback}>
      <img src={img} alt="button icon" />
      <span>{text}</span>
    </button>
  );
};

