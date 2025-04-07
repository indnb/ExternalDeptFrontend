"use client";

import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type ButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
};

export const SwitchLanguageButton: React.FC<ButtonProps> = ({ title, onClick, className, }) => {
  const { fontSize } = useInvalidWidgetStore()
  return (
    <button
      onClick={onClick}
      className={`${fontSize ? "text-[25px]" : "text-[20px]"} text-center  h-[50px] w-[50px] rounded-md border-2  ${className}`}
    >
      {title}
    </button>
  );
};

export default SwitchLanguageButton;
