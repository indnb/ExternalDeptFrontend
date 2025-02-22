"use client";

import { SwitchLanguageButton } from "@/Atoms/SwitchLanguageButton";
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const HeaderButtons: React.FC = () => {
  const { language, changeLanguage } = useLanguageStore();
  const { contrast } = useInvalidWidgetStore()
  const languages: string[] = ["ua", "en"];

  return (
    <div className="flex space-x-2 md:space-x-8 mr-5 lg:mr-12">
      {languages.map((elem: string) => {
        const isActive = elem === language;
        return (
          <SwitchLanguageButton
            key={elem}
            title={elem.toUpperCase()}
            onClick={() => changeLanguage(elem as "ua" | "eng")}
            className={`px-2 py-2 rounded-md border-2 mr-2 border-black ${isActive ? contrast ? "bg-[#414141] text-white" : "bg-[#203C8F] text-white" : "bg-white text-black"
              } text-sm md:text-lg lg:text-xl`}
          />
        );
      })}
    </div>
  );
};

export default HeaderButtons;
