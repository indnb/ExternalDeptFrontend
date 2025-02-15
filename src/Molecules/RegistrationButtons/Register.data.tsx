import { SvgLeader } from "./SvgLeader";
import { SvgCommand } from "./SvgCommand";
export interface IRegisterButtonData {
  img: any;
  text: string
}
export const RegisterButtonData: IRegisterButtonData[] = [
  {
    img: <SvgLeader />,
    text: "РЕЄСТРАЦІЯ УЧАСНИКА"
  },
  {
    img: <SvgCommand />,
    text: "РЕЄСТРАЦІЯ КОМАНДИ"
  },

]
