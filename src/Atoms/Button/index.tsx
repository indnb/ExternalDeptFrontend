import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type buttonProps = {
  title: string;
  callback?: () => void;
  colorButton?: "blue" | "white";
  type?: "button" | "submit";
  classCss?: string
};

export const Button: React.FC<buttonProps> = ({
  title,
  callback,
  colorButton = "white",
  type = "button",
  classCss = ""
}) => {
  const handleClick = () => {
    if (callback) {
      callback();
    }
  };
  const { contrast, fontFamily, fontSize, } = useInvalidWidgetStore()

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${colorButton == "blue"
        ? " bg-[#203C8F] text-white border-[#203C8F] hover:border-[#8D8D8D] hover:text-[#8D8D8D] hover:bg-[white]"
        : "border-[#8D8D8D] text-[#8D8D8D] hover:text-white   hover:bg-[#203C8F] hover:border-[#203C8F]"
        }
${fontFamily ? "font-kharkiv" : "font-montserrat"}
    ${contrast && "text-white bg-[#414141] border-[#414141]"}
     ${classCss}
    flex justify-center items-center self-center border-2  rounded-xl text-center
    transition h-12 w-96 max-sm:w-[80vw] ${fontSize ? " text-[24px] max-sm:text-[16px]" : "text-[16px] max-sm:text-[14px]"} `}
    >
      {title}
    </button>
  );
};
