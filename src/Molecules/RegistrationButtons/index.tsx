
import { IRegisterButtonData, RegisterButtonData } from "./Register.data";
import { RegisterButton } from "@/Atoms/RegisterButton";

interface RegistrationButtonsProps {
  setSelectedForm: (form: "participant" | "team") => void;
}

export const RegistrationButtons: React.FC<RegistrationButtonsProps> = ({ setSelectedForm }) => {

  return (
    <div className="flex  items-center gap-6 p-2 sm:flex-row justify-center">
      {RegisterButtonData.map((elem: IRegisterButtonData, index) => (
          <RegisterButton
              key={index}
              img={elem.img}
              text={elem.text}
              callback={() => setSelectedForm(elem.formType)}
          />
      ))}









    </div>
  );
};

/*  <div onClick={() => setSelectedForm("participant")}>
      <Button                                                                            
          title={language === "ua" ? "Реєстрація учасника" : "Participant registration"} 
      />                                                                                 
  </div>                                                                                 
  <div    onClick={() => setSelectedForm("team")}>                          
      <Button                                                                            
          title={language === "ua" ? "Реєстрація команди" : "Team registration"}         
      />                                                                                 
  </div>                                                                                 
*/
