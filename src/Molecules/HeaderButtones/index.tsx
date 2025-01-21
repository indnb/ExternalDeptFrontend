"use client";

import { SwitchLanguageButton } from "@/Atoms/SwitchLanguageButton";
import { useLanguageStore } from "@/_store/LanguageChanger";

export const HeaderButtons: React.FC = () => {
    const { language, changeLanguage } = useLanguageStore();
    const languages: string[] = ["ua", "en"];

    return (
        <div className=" flex space-x-2 md:space-x-8 lg:mr-12">
            {languages.map((elem: string) => {
                const isActive = elem === language;
                return (
                    <SwitchLanguageButton
                        key={elem}
                        title={elem.toUpperCase()}
                        onClick={() => changeLanguage(elem as "ua" | "eng")}
                        className={`px-2 py-2 rounded-md border-2 mr-2 border-black ${
                            isActive ? "bg-[#203C8F] text-white" : "bg-white text-black"
                        }`}
                    />
                );
            })}
        </div>
    );
};

export default HeaderButtons;
