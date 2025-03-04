import { SvgLeader } from "./SvgLeader";
import { SvgCommand } from "./SvgCommand";
export interface IRegisterButtonData {
  img: any;
  text: string;
  formType: "participant" | "team";
}
export const RegisterButtonData: IRegisterButtonData[] = [
  {
    img: <SvgLeader />,
    text: "РЕЄСТРАЦІЯ УЧАСНИКА",
    formType: "participant"
  },
  {
    img: <SvgCommand />,
    text: "РЕЄСТРАЦІЯ КОМАНДИ",
    formType: "team"
  }
];
