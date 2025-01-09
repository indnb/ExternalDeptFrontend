"use client";
import { FooterImage } from "@/src/app/Atoms/FooterImage";
import { FooterLabel } from "@/src/app/Atoms/FooterLabel";

export const FooterDtikt: React.FC = () => {
    return (
        <div className="flex flex-col gap-20 p-10">
            <FooterImage />
            <FooterLabel title="Політика конфіденційності" />
        </div>
    );
};
