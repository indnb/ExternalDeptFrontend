import ImageImg from "@/public/invalidIcon/Group60.svg";
import FontFamilyImg from "@/public/invalidIcon/Group62.svg";
import ContrastImg from "@/public/invalidIcon/Group61.svg";
import FontSizeImg from "@/public/invalidIcon/Group63.svg";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";

export const InvalidData = [
  {
    icon: ImageImg,
    text: "Зображення",
    callback: () => { }
  },
  {
    icon: FontFamilyImg,
    text: "Шрифт",
  },
  {
    icon: ContrastImg,
    text: "Контраст",
  },
  {
    icon: FontSizeImg,
    text: "Збільшення шрифту",
  },
];
