import {FooterText} from "@/src/app/Atoms/FooterText";
import {FooterItemList} from "@/src/app/Atoms/FooterItemList";
import {FooterLabel} from "@/src/app/Atoms/FooterLable";

export const FooterMenu=()=>{
    return (
        <div className="flex flex-row gap-10 p-10">
            <div className="flex flex-col items-center gap-10">
                <FooterText title="Меню"/>
                <FooterItemList list={['Головна','Новини','Про нас']}/>
                <FooterLabel title="Pеєстрація на хакатон"/>
            </div>
            <div className="flex flex-col items-center">
                <FooterText title="Контакти"/>
            </div>
        </div>
    )
}