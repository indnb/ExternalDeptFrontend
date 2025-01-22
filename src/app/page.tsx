"use client";
import { uselanguagestore } from "../store/languagechanger";
import "src/app/globals.css";
import { Footer } from "@/Organisms/Footer";

import { DesktopRegistration } from "@/Organisms/DesktopRegistration";
import { News } from "@/Organisms/News";
import { RegistrationButtons } from "@/Molecules/RegistrationButtons";
import { MobileRegistration } from "@/Organisms/MobileRegistration";
import { Main } from "@/Organisms/Main";
export default function Home() {
  return (
    <div className="bg-white ">
      <h1
        style={{
          fontFamily:
            "'Kharkiv Tone', 'Kyiv Type Sans', 'Montserrat', sans-serif",
        }}
        className="text-black"
      >
        aaaaa
      </h1>
      <div className={`w-full flex flex-col gap-10 justify-center`}>
        <Main />
        <News />
        <MobileRegistration />
        <RegistrationButtons />
      </div>
    </div>
  );
}
