import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { Headerimage } from "@/Atoms/HeaderImage";

export const HeaderDyikt: React.FC = () => {
  const { language } = useLanguageStore()
  const { fontSize, fontFamily } = useInvalidWidgetStore()
  return (
    <div className="flex items-center">
      <Headerimage />
      <h1 className={`${fontFamily ? "font-kyivSerif" : "font-kyivSans"} ${fontSize ? "text-[40px] " : "text-[26px]"} ml-[11px] max-lg:text-[0px]`}>{language == "ua" ? "Відділ зовнішніх зв’язків" : "Department of external relations"}</h1>
    </div>
  );
};
