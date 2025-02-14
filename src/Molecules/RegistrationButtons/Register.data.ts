import imgLead from "@/public/RegisterIcon/ri_team-fill.svg"
import imgCommand from "@/public/RegisterIcon/ri_team-fill(1).svg"
export interface IRegisterButtonData {
  img: string;
  text: string
}
export const RegisterButtonData: IRegisterButtonData[] = [
  {
    img: imgLead,
    text: "РЕЄСТРАЦІЯ УЧАСНИКА"
  },
  {
    img: imgCommand,
    text: "РЕЄСТРАЦІЯ КОМАНДИ"
  },

]
