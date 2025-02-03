import { RegistrationHeader } from "@/Molecules/RegistrationHeader";
import { RegistrationForm } from "@/Molecules/RegistrationForm";
import { RegistrationNavbar } from "@/Molecules/RegistrationNavbar";

interface MobileRegistrationProps {
    selectedForm: "participant" | "team";
}

export const MobileRegistration: React.FC<MobileRegistrationProps> = ({ selectedForm }) => {
    const formTitles: Record<MobileRegistrationProps["selectedForm"], string> = {
        participant: "учасника",
        team: "команди",
    };

    return (
        <div className="bg-white shadow-lg shadow-gray-500 rounded-lg w-[90%] flex flex-col text-center items-center self-center">
            <RegistrationNavbar />
            <RegistrationHeader title={formTitles[selectedForm]} />
            <RegistrationForm selectedForm={selectedForm} />
        </div>
    );
};
