import {FooterText} from "@/src/app/Atoms/FooterText";
import {FooterList} from "@/src/app/Atoms/FooterList";
import {FooterLabel} from "@/src/app/Atoms/FooterLabel";

export const FooterMenu=()=>{
    return (
        <div className="flex flex-row gap-10 p-10">
            <div className="flex flex-col items-center gap-10">
                <FooterText title="Меню"/>
                <FooterList list={['Головна','Новини','Про нас']}/>
                <FooterLabel title="Pеєстрація на хакатон"/>
            </div>
            <div className="flex flex-col items-center">
                <FooterText title="Контакти"/>
            </div>
        </div>
    )
}