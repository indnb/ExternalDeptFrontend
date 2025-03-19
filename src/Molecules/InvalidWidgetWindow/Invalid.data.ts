import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import ImageImg from "@/public/invalidIcon/Group60.svg";
import FontFamilyImg from "@/public/invalidIcon/Group62.svg";
import ContrastImg from "@/public/invalidIcon/Group61.svg";
import FontSizeImg from "@/public/invalidIcon/Group63.svg";


export const useGetInvalidData = () => {
  const { fontFamily, fontSize, contrast, image, setFontFamily, setContrast, setFontSize, setImage } = useInvalidWidgetStore();

  return [
    {
      icon: ImageImg,
      text: "Зображення",
      callback: () => setImage(),
      state: image,
    },
    {
      icon: FontFamilyImg,
      text: "Шрифт",
      callback: () => setFontFamily(),
      state: fontFamily,
    },
    {
      icon: ContrastImg,
      text: "Контраст",
      callback: () => setContrast(),
      state: contrast,
    },
    {
      icon: FontSizeImg,
      text: "Збільшення шрифту",
      callback: () => setFontSize(),
      state: fontSize,
    },
  ];
};
