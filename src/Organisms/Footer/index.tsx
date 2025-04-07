"use client"
import { useInvalidWidgetStore } from "@/_store/InvalidWidget";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { FooterTopPanel } from "@/Molecules/FooterTopPanel";
import Link from "next/link";

export const Footer = () => {
  const { contrast } = useInvalidWidgetStore()
  const { language } = useLanguageStore()
  return (
    <footer className={`overflow-x-hidden max-lg:h-[165px] ${contrast ? "bg-[#414141]" : "bg-[#203C8F]"} w-[100vw] h-[370px] flex items-center flex-col `}>
      <FooterTopPanel />
      <div className="w-[93vw] mt-[12px] max-lg:text-[12px] items-start text-[22px] flex flex-col text-white">
        <a href="https://t.me/skalse_456" target="_blank" style={{ fontFamily: "Montserrat" }} rel="noopener noreferrer" >
          {language == "ua" ? "Служба підтримки" : "Contacts"}:
          @skalse_456</a>
        <Link href="/privacy" className="cursor-pointer   " style={{ fontFamily: "Montserrat" }}
        >{language === "ua" ? "Політика конфіденційності" : "Privacy Policy"}</Link>
        <Link href="/privacy" className="cursor-pointer inline-block" style={{ fontFamily: "Montserrat" }}
        >{language === "ua" ? "© 2025 Відділ зовнішніх зв’язків ДУІКТ" : "© 2025 Department of External Relations of  SUICT"}</Link>
      </div>
    </footer>
  );
};
