import { useLanguageStore } from "@/_store/LanguageChanger";
import { Headerimage } from "@/Atoms/HeaderImage";

export const HeaderDyikt: React.FC = () => {
  const { language } = useLanguageStore()
  return (
    <div className="flex items-center">
      <Headerimage />
      <h1 className="font-montserrat text-[22px] ml-[11px] max-lg:text-[0px]">{language == "ua" ? "Відділ зовнішніх зв’язків" : "Department of external relations"}</h1>
    </div>
  );
};
