"use client";
import { useState } from "react";
import "src/app/globals.css";
import { Main } from "@/Organisms/Main";
import { News } from "@/Organisms/News";
import { Footer } from "@/Organisms/Footer";
import { RegistrationButtons } from "@/Molecules/RegistrationButtons";
import { RegistrationBox } from "@/Molecules/RegistrationBox";
import { MobileRegistration } from "@/Organisms/MobileRegistration";
import { DesktopRegistration } from "@/Organisms/DesktopRegistration";
import {RegistrationText} from "@/Atoms/RegistrationText";

export default function Home() {
    const [selectedForm, setSelectedForm] = useState<"participant" | "team" | null>(null);

    return (
        <div className="bg-white">
            <div className="w-full flex flex-col gap-10 justify-center">
                <Main />
                <News />
                <div className="w-full flex flex-col gap-10 justify-center">
                    {!selectedForm ? (
                        <div className="flex flex-col gap-6">
                            <RegistrationText title={` на хакатон`}/>
                            <div className="flex flex-col-reverse sm:flex-col gap-6">
                                <RegistrationButtons setSelectedForm={setSelectedForm} />
                                <RegistrationBox />
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center sm:hidden" >
                                <MobileRegistration selectedForm={selectedForm} />
                            </div>
                            <div className="hidden sm:block">
                                <DesktopRegistration selectedForm={selectedForm}  />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
