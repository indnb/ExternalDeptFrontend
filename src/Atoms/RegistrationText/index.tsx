"use client"
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type TextProps = {
  title: string;
};

export const RegistrationText: React.FC<TextProps> = ({ title }) => {
  const { fontFamily } = useInvalidWidgetStore()
  return (
    <div>
      <p
        className={`${fontFamily ? "font-kyivSerif" : "font-kyivSans"} font-normal text-[48px] max-[850px]:text-[28px] flex text-black p-2  justify-center`}> {title}</p>
    </div>
  )
}
