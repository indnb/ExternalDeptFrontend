"use client";
import { useLanguageStore } from "../store/LanguageChanger";
import 'src/app/globals.css'
import {Footer} from "@/src/app/Organisms/Footer";
import {Registration} from "@/src/app/Organisms/Registration";

export default function Home() {
  const { language, changeLanguage } = useLanguageStore();
  const toggleLang = () => {
    changeLanguage(language === "ua" ? "eng" : "ua");
  };
  return (
      <div>
          <div
              className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
              <h1 data-testid="text">{language}</h1>
              <button onClick={() => toggleLang()}>one up</button>

          </div>
      </div>

  );
}
