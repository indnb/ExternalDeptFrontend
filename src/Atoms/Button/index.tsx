import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

type buttonProps = {
  title: string;
  callback?: () => void;
  colorButton?: "blue" | "white";
  type?: "button" | "submit";
};

export const Button: React.FC<buttonProps> = ({
  title,
  callback,
  colorButton = "white",
  type = "button",
}) => {
  const handleClick = () => {
    if (callback) {
      callback();
    }
  };
  const { contrast, fontSize } = useInvalidWidgetStore()

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${colorButton == "blue"
        ? " bg-[#203C8F] text-white border-[#203C8F] hover:border-[#8D8D8D] hover:text-[#8D8D8D] hover:bg-[white]"
        : "border-[#8D8D8D] text-[#8D8D8D] hover:text-white   hover:bg-[#203C8F] hover:border-[#203C8F]"
        }
    ${contrast && "text-white bg-[#414141]"}
    max-[550px]:w-[80vw]
    flex justify-center items-center self-center border-2  rounded-xl
    transition h-12 w-96 ${fontSize ? " text-[24px]" : "text-[16px]"} `}
    >
      {title}
    </button>
  );
};
