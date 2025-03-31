"use clinet"

import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type buttonProps = {
  title: string;
  width: string;
}

export const RegistrationButton: React.FC<buttonProps> = ({ title, width }) => {
  const { fontSize, fontFamily, contrast } = useInvalidWidgetStore()
  return (
    <button
      type="submit"
      style={{ width: `${width}px` }}
      className={`

${contrast ? "hover:bg-[#414141] hover:border-[#414141]" : "hover:bg-[#203C8F] hover:border-[#203C8F]"}
${fontFamily ? "font-kharkiv" : "font-montserrat"}
${fontSize ? "text-[18px] msx-lg:text-[14px]" : "text-[16px] msx-lg:text-[12px]"}
flex justify-center items-center self-center border-2 border-[#8D8D8D] text-[#8D8D8D] rounded-xl   hover:text-white transition h-12
`}
    >
      {title}
    </button>
  );
};
