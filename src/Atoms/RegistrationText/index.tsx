"use client"
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type TextProps = {
  title: string;
};

export const RegistrationText: React.FC<TextProps> = ({ title }) => {
  const { fontFamily, fontSize } = useInvalidWidgetStore()
  return (
    <div>
      <p
        className={`${fontFamily ? "font-kyivSerif" : "font-kyivSans"}
font-normal  
${fontSize ? "text-[56px] max-lg:text-[42px]" : "text-[48px] max-lg:text-[32px]"} 
text-center

w-[88w]
 flex text-black p-2  justify-center`}>
        {title}
      </p>
    </div>
  )
}
