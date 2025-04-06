import { useState } from "react";
import { useForm } from "react-hook-form";
import { onSubmitTeam } from "./onSubmitTeam";
import { IOption, RegistrationInput } from "@/Molecules/RegistrationInput";
import { RegistrationButton } from "src/Atoms/RegistrationButton";
import { useFormConfig } from "./RegistrationFormParticipant.data";
import { useRegisterTeam } from "./RegistrationFormTeam.data";
import { useLanguageStore } from "@/_store/LanguageChanger";
import { Button } from "@/Atoms/Button";
import proiconsCancel from "@/public/proicons_cancel.svg"
import plus from "@/public/plus.svg"

import Image from "next/image";

interface RegistrationFormProps {
  selectedForm: "participant" | "team";
  setStatusRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number
}
type MemberIndex = 1 | 2 | 3 | 4 | 5 | 6;

type MemberFormFields = {
  [K in MemberIndex as `member_name${K}`]?: string;
} & {
  [K in MemberIndex as `member_university${K}`]?: number;
} & {
  [K in MemberIndex as `member_phone${K}`]?: string;
} & {
  [K in MemberIndex as `member_nickname_tg${K}`]?: string;
};

export interface ICreateTeam extends Partial<MemberFormFields> {
  team_name: string;
  category: string;
  captain_nickname_tg: string;
  captain_name: string;
  captain_phone: string;
  captain_university: number;
}

interface IMesssageError {
  message: string
  message_eng: string
}
export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedForm, setStatusRegister, page, setPage }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState<IMesssageError | undefined>()
  const [university, setUniversity] = useState<IOption | undefined>()
  const { language } = useLanguageStore()
  const { control, handleSubmit, formState: { errors }, reset, trigger, getValues } = useForm<ICreateTeam>();
  const { participantConfig } = useFormConfig();
  const { teamConfig, setCountMembers, membersConfig, countMembers
  } = useRegisterTeam()
  const handlerNextPage = async () => {
    const isValid = await trigger();
    if (isValid) {
      setPage(page + 1);
    }
  };
  const inputsConfig = selectedForm === "participant" ? participantConfig : teamConfig;
  const handleFormSubmit = async (data: ICreateTeam) => {

    await onSubmitTeam(data, reset, setMessage, setStatusRegister, setPage);
    setFormSubmitted(true);
  };
  const handlerAddMembers = () => {
    if (countMembers >= 5) {
      return
    }
    setCountMembers(countMembers + 1)
  }

  const handlerRemoveMember = async (index: number) => {
    if (countMembers <= 1) {
      return;
    }

    const currentValues = getValues();

    const teamAndCaptainFields = {};
    const memberFieldsToRemove = {};
    const otherMemberFields = {};

    Object.entries(currentValues).forEach(([key, value]) => {
      const match = key.match(/(\D+)(\d+)$/);
      if (!match) {
        teamAndCaptainFields[key] = value;
        return;
      }

      const [, prefix, numStr] = match;
      const num = parseInt(numStr);

      if (prefix.startsWith('member_')) {
        if (num === index + 1) {
          memberFieldsToRemove[key] = value;
        } else {
          otherMemberFields[key] = value;
        }
      } else {
        teamAndCaptainFields[key] = value;
      }
    });

    const renumberedMemberFields = {};
    let newMemberIndex = 1;

    const memberFieldsByOriginalIndex = {};

    Object.entries(otherMemberFields).forEach(([key, value]) => {
      const match = key.match(/(member_\D+)(\d+)$/);
      if (!match) return;

      const [, prefix, numStr] = match;
      const originalIndex = parseInt(numStr);

      if (!memberFieldsByOriginalIndex[originalIndex]) {
        memberFieldsByOriginalIndex[originalIndex] = {};
      }

      memberFieldsByOriginalIndex[originalIndex][prefix] = value;
    });

    Object.keys(memberFieldsByOriginalIndex)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .forEach(originalIndex => {
        const memberData = memberFieldsByOriginalIndex[originalIndex];

        Object.entries(memberData).forEach(([prefix, value]) => {
          renumberedMemberFields[`${prefix}${newMemberIndex}`] = value;
        });

        newMemberIndex++;
      });

    const updatedObj = {
      ...teamAndCaptainFields,
      ...renumberedMemberFields
    };

    reset(updatedObj);
    setCountMembers(countMembers - 1);
  };
  const handlerBack = () => {
    setPage(0)
  }
  return (
    <form className="w-full max-[450px]:w-[auto] flex flex-col  justify-center items-center" onSubmit={handleSubmit(handleFormSubmit)}>

      {inputsConfig && page == 0 && <RegistrationInput inputsConfig={inputsConfig} setUniversity={setUniversity} control={control} errors={errors} />}
      {page == 1 &&
        membersConfig.map((elem, index) => (
          <div key={index} className="h-[210px] max-lg:h-[400px] max-sm:w-[90vw] mt-[95px]">
            <div className=" mt-[-70px] flex justify-between">
              <h1 className="font-montserrat text-[18px]">
                {language == 'ua' ?
                  `Учасник ${index + 1}`
                  :
                  `Participant ${index + 1}`
                }
              </h1>
              {countMembers != 1 && <Image onClick={() => handlerRemoveMember(index)} src={proiconsCancel} alt="" className="  cursor-pointer  " />}
            </div>

            <RegistrationInput university={university} inputsConfig={elem} control={control} errors={errors} />
            {page == 1 && selectedForm == "team" && countMembers == index + 1 && countMembers < 5 &&
              <div onClick={handlerAddMembers} className="mt-[50px] max-lg:mt-[25px] flex font-montserrat justify-end text-[18px] w-[100%] items-center text-center cursor-pointer">
                <h1> {language == "ua" ? "Додати учасника" : "Add participant"}</h1>
                <Image src={plus} alt="" className="    ml-[5px]" />

              </div>}

          </div>

        )
        )}


      <div className=" mt-[90px] max-lg:mt-[70px]" >
        {page == 0 && selectedForm == "team" && <RegistrationButton tpyeButton="button" handler={handlerNextPage} width="300" title={language == "ua" ? "Далі" : "Next"} />}
        {(selectedForm === "participant" || (page === 1 && selectedForm === "team")) && (
          <Button classCss="w-[300px] max-sm:!w-[300px]" colorButton="blue" title={language === "ua" ? "Надіслати" : "Send"} type="submit" />

        )}
      </div>
      {page == 1 && selectedForm == "team" &&
        <div className="w-[300px] mt-[25px]">
          <Button classCss="w-[300px] max-sm:!w-[300px]" colorButton="blue" title={language === "ua" ? "Повернутися назад" : "Go back"} callback={handlerBack} />
        </div>}
      {formSubmitted && (
        <p className="text-black text-center mt-4">{language == "ua" ? message?.message : message?.message_eng}</p>
      )}
    </form>
  );
};
