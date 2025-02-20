import { FooterImage } from "@/Atoms/FooterImage";
import { FooterLabel } from "@/Atoms/FooterLable";

export const FooterDyikt: React.FC = () => {
    return (
        <div className="flex flex-col gap-20 p-10">
            <FooterImage />
            <FooterLabel title="Політика конфіденційності" />
        </div>
    );
};
