import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type LabelProps = {
  title: string;
};

export const RegistrationLable: React.FC<LabelProps> = ({ title }) => {
  const { fontFamily, fontSize } = useInvalidWidgetStore()
  return (
    <div
      className={`${fontFamily ? "font-kharkiv" : "font-montserrat"}
${fontSize ? " text-[23px] max-lg:text-[14px]" : "text-[20px] max-lg:text-[12px]"}
 max-lg:mt-[-5px] text-[#6A6A6A]
flex p-2  text-sm justify-center`}>
      {title}
    </div>
  )
}

