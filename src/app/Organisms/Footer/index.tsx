import {FooterDyikt} from "@/Molecules/FooterDyikt";
import {FooterMenu} from "@/Molecules/FooterMenu";

export const Footer = () => {
    return (
        <footer className="bg-[#203C8F] flex justify-between">
            <FooterDyikt/>
            <FooterMenu />
        </footer>
    )
}