import { RegistrationBoxImage } from "@/Atoms/RegistrationBoxImage/RegistrationBoxImage";
import { RegistrationBoxLabel } from "@/Atoms/RegistrationBoxLabel";
import { RegistrationBoxText } from "@/Atoms/RegistrationBoxText";
import React from "react";

interface RegistrationBoxItemProps {
    image: string;
    text: string;
    label: string;
}

export const RegistrationBoxItem: React.FC<RegistrationBoxItemProps> = ({ image, text, label }) => {
    return (
        <div className="flex w-full h-32 max-sm:flex-col max-sm:h-auto flex-row justify-evenly text-center items-center p-8  ">
            <div className="flex flex-col items-center self-center">
                <RegistrationBoxImage image={image} />
                <RegistrationBoxText text={text} />
            </div >
            <RegistrationBoxLabel label={label} />
        </div>
    );
};
