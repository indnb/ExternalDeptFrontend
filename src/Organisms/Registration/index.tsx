import { RegistrationText } from "@/Atoms/RegistrationText";
import { RegistrationButtons } from "@/Molecules/RegistrationButtons";
import { RegistrationBox } from "@/Molecules/RegistrationBox";
import { MobileRegistration } from "@/Organisms/MobileRegistration";
import { DesktopRegistration } from "@/Organisms/DesktopRegistration";
import { useState } from "react";

export const Registration = () => {
    const [selectedForm, setSelectedForm] = useState<"participant" | "team" | null>(null);

    const handleClose = () => {
        setSelectedForm(null);
    };

    return (
        <div className="w-full flex flex-col gap-10 justify-center">
            {!selectedForm ? (
                <div className="flex flex-col gap-6">
                    <RegistrationText title={` на хакатон`} />
                    <div className="flex flex-col-reverse min-[850px]:flex-col gap-6">
                        <RegistrationButtons setSelectedForm={setSelectedForm} />
                        <RegistrationBox />
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-center min-[850px]:hidden">
                        <MobileRegistration selectedForm={selectedForm} onClose={handleClose} />
                    </div>
                    <div className="hidden min-[850px]:block">
                        <DesktopRegistration selectedForm={selectedForm} onClose={handleClose} />
                    </div>
                </>
            )}
        </div>
    );
};
