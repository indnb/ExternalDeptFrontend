import {FooterDtikt} from "@/src/app/Molecules/FooterDtikt";
import {FooterMenu} from "@/src/app/Molecules/FooterMenu";

export const Footer = () => {
    return (
        <footer className="bg-[#203C8F] flex justify-between">
            <FooterDtikt/>
            <FooterMenu/>
        </footer>
    )
}