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
      text_eng: "Image",
      callback: () => setImage(),
      state: image,
    },
    {
      icon: FontFamilyImg,
      text: "Шрифт",
      text_eng: "Font",
      callback: () => setFontFamily(),
      state: fontFamily,
    },
    {
      icon: ContrastImg,
      text: "Контраст",
      text_eng: "Contrast",
      callback: () => setContrast(),
      state: contrast,
    },
    {
      icon: FontSizeImg,
      text: "Збільшення шрифту",
      text_eng: "Font Size Increase",
      callback: () => setFontSize(),
      state: fontSize,
    },
  ];
};
