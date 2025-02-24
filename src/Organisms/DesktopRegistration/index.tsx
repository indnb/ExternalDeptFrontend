import { RegistrationHeader } from "@/Molecules/RegistrationHeader";
import { RegistrationForm } from "@/Molecules/RegistrationForm";

interface DesktopRegistrationProps {
    selectedForm: "participant" | "team";
    onClose: () => void;
}

export const DesktopRegistration: React.FC<DesktopRegistrationProps> = ({ selectedForm, onClose }) => {
    const formTitles: Record<DesktopRegistrationProps["selectedForm"], string> = {
        participant: "учасника",
        team: "команди",
    };


    return (
        <div className="bg-white">
            <RegistrationHeader onClose={onClose} title={formTitles[selectedForm]} />
            <RegistrationForm selectedForm={selectedForm} />
        </div>
    );
};
