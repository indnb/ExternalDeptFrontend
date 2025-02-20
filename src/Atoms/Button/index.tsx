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
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${colorButton == "blue"
          ? " bg-[#203C8F] text-white border-[#203C8F] hover:border-[#8D8D8D] hover:text-[#8D8D8D] hover:bg-[white]"
          : "border-[#8D8D8D] text-[#8D8D8D] hover:text-white   hover:bg-[#203C8F] hover:border-[#203C8F]"
        }
    max-[550px]:w-[80vw]
    flex justify-center items-center self-center border-2  rounded-xl
    transition h-12 w-96`}
    >
      {title}
    </button>
  );
};
