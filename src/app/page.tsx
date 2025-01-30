"use client";
import { uselanguagestore } from "../store/languagechanger";
import "src/app/globals.css";
import { Footer } from "@/Organisms/Footer";
import { AboutUs } from "@/Organisms/AboutUs";
import { RegistrationButtons } from "@/Molecules/RegistrationButtons";
import { RegistrationBox } from "@/Molecules/RegistrationBox";
import { MobileRegistration } from "@/Organisms/MobileRegistration";
import { DesktopRegistration } from "@/Organisms/DesktopRegistration";
import { News } from "@/Organisms/News";
import { Main } from "@/Organisms/Main";
export default function Home() {
  return (
    <div className="bg-[#F6F6F6] ">
      <div className={`w-full flex flex-col gap-10 justify-center`}>
        <Main />
        <News />
        <AboutUs />
        <RegistrationBox />
        <MobileRegistration />
        <RegistrationButtons />
      </div>
    </div>
  );
}
