"use client";
import { useLanguageStore } from "../store/LanguageChanger";
import "src/app/globals.css";
import { Footer } from "@/Organisms/Footer";
import { DesktopRegistration } from "src/Organisms/DesktopRegistration";
import {RegistrationButtons} from "@/Molecules/RegistrationButtons";
import {MobileRegistration} from "@/Organisms/MobileRegistration";

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
            <MobileRegistration/>
            <RegistrationButtons/>
        </div>

    </div>
  );
}
