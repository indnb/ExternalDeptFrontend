import React from "react";
import { InvalidWidgetHeader } from "@/Atoms/InvalidWidgetHeader";
import { ItemInvalidWidget } from "@/Atoms/ItemInvalidWidget";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import ImageImg from "@/public/invalidIcon/Group60.svg";
import FontFamilyImg from "@/public/invalidIcon/Group62.svg";
import ContrastImg from "@/public/invalidIcon/Group61.svg";
import FontSizeImg from "@/public/invalidIcon/Group63.svg";
import { f } from "msw/lib/core/HttpResponse-5Sn2vNaJ";
interface InvalidWidgetWindowProps {
  setStateWidget: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InvalidWidgetWindow = ({
  setStateWidget,
}: InvalidWidgetWindowProps) => {
  const { fontFamily, fontSize, contrast, setFontFamily, setContrast, setFontSize } = useInvalidWidgetStore();

  const InvalidData = [
    {
      icon: ImageImg,
      text: "Зображення",
      callback: () => { },
      state: ""
    },
    {
      icon: FontFamilyImg,
      text: "Шрифт",
      callback: () => { setFontFamily() },
      state: fontFamily,

    },
    {
      icon: ContrastImg,
      text: "Контраст",
      callback: () => { setContrast() },
      state: contrast

    },
    {
      icon: FontSizeImg,
      text: "Збільшення шрифту",
      callback: () => { setFontSize() },
      state: fontSize


    },
  ];
  return (
    <div
      className="fixed rounded-[16px]  right-[2vw] top-[36vh] h-[537px] w-[546px] bg-[white] text-white flex flex-col  items-center rounded-md shadow-md
        overflow-hidden  max-[850px]:w-[383px] max-[850px]:h-[452px] max-[850px]:top-[43vh]
        shadow-md z-40"
    >
      <InvalidWidgetHeader setStateWidget={setStateWidget} />
      <div className="flex flex-wrap gap-[31px] items-center justify-center mt-[34px]">
        {InvalidData.map((elem, index) => (
          <ItemInvalidWidget key={index} elem={elem} />
        ))}
      </div>
      <h1 className="text-[0px] max-[850px]:text-[16px] text-[black] mt-[20px]">
        Вимкнути
      </h1>
    </div>
  );
};
