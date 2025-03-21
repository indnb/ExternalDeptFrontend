import { SvgLeader } from "./SvgLeader";
import { SvgCommand } from "./SvgCommand";
export interface IRegisterButtonData {
  img: any;
  text: string;
  text_eng: string;
  formType: "participant" | "team";

}
export const RegisterButtonData: IRegisterButtonData[] = [
  {
    img: <SvgLeader />,
    text: "РЕЄСТРАЦІЯ УЧАСНИКА",
    text_eng: "PARTICIPANT REGISTRATION",
    formType: "participant"
  },
  {
    img: <SvgCommand />,
    text: "РЕЄСТРАЦІЯ КОМАНДИ",
    text_eng: "TEAM REGISTRATION",
    formType: "team"
  }
];
