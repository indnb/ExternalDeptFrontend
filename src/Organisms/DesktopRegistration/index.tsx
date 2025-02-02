import { RegistrationHeader } from "@/Molecules/RegistrationHeader";
import { RegistrationForm } from "@/Molecules/RegistrationForm";

interface DesktopRegistrationProps {
    selectedForm: "participant" | "team";
}

export const DesktopRegistration: React.FC<DesktopRegistrationProps> = ({ selectedForm }) => {
    const formTitles: Record<DesktopRegistrationProps["selectedForm"], string> = {
        participant: "учасника",
        team: "команди",
    };

    return (
        <div className="bg-white">
            <RegistrationHeader title={formTitles[selectedForm]} /> {/* Передаем title */}
            <RegistrationForm selectedForm={selectedForm} />
        </div>
    );
};
