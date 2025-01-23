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
        <div className="flex flex-col text-center items-center p-4 ">
            <div className="flex flex-col items-center">
                <RegistrationBoxImage image={image} />
                <RegistrationBoxText text={text} />
            </div>
            <RegistrationBoxLabel label={label} />
        </div>
    );
};
