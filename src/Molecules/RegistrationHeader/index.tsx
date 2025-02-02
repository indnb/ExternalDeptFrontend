import {RegistrationText} from "@/Atoms/RegistrationText";
import {RegistrationLable} from "@/Atoms/RegistrationLable";

interface RegistrationHeaderProps {
    title: string;
}

export const RegistrationHeader: React.FC<RegistrationHeaderProps> = ({ title }) => {
    return (
        <div>
            <RegistrationText title={title} />
            <RegistrationLable title="*Максимальна кількість учасників в команді - 6." />
        </div>
    );
};
