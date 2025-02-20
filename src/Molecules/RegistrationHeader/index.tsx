import { RegistrationText } from "@/Atoms/RegistrationText";
import { RegistrationLable } from "@/Atoms/RegistrationLable";
import { BackButton } from "@/Atoms/BackButton";

interface RegistrationHeaderProps {
    title: string;
    onClose: () => void;
}

export const RegistrationHeader: React.FC<RegistrationHeaderProps> = ({ title, onClose }) => {
    return (
        <div className="flex items-center w-full p-2">
            <div className="hidden justify-start min-[850px]:block">
                <BackButton onClose={onClose} />
            </div>

            <div className="flex flex-col justify-center flex-1 text-center">
                <RegistrationText title={title} />
                <RegistrationLable title="*Максимальна кількість учасників в команді - 6." />
            </div>
        </div>
    );
};
