import { FooterText } from "@/Atoms/FooterText";
import { FooterList } from "@/Molecules/FooterList";
import { FooterLabel } from "@/Atoms/FooterLable";

export const FooterMenu = () => {
  return (
    <div className="flex flex-row gap-10 p-10">
      <div className="flex flex-col items-center gap-10">
        <FooterText title="Меню" />
        <FooterList list={['Головна', 'Новини', 'Про нас']} />
        <FooterLabel title="Pеєстрація на хакатон" />
      </div>
      <div className="flex flex-col items-center">
        <FooterText title="Контакти" />
      </div>
    </div>
  )
}
