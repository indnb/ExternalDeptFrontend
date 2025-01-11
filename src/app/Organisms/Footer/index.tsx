import {FooterDyikt} from "src/app/Molecules/FooterDyikt";
import {FooterMenu} from "@/src/app/Molecules/FooterMenu";

export const Footer = () => {
    return (
        <footer className="bg-[#203C8F] flex justify-between">
            <FooterDyikt/>
            <FooterMenu />
        </footer>
    )
}