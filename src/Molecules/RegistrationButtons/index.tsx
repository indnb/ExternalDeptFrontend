import { Button } from "@/Atoms/Button";
import { useLanguageStore } from "@/_store/LanguageChanger";

interface RegistrationButtonsProps {
    setSelectedForm: (form: "participant" | "team") => void;
}

export const RegistrationButtons: React.FC<RegistrationButtonsProps> = ({ setSelectedForm }) => {
    const { language } = useLanguageStore();

    return (
        <div className="flex flex-col items-center gap-6 p-2 sm:flex-row justify-center">
            <div onClick={() => setSelectedForm("participant")}>
                <Button
                    title={language === "ua" ? "Реєстрація учасника" : "Participant registration"}
                />
            </div>
            <div    onClick={() => setSelectedForm("team")}>
                <Button
                    title={language === "ua" ? "Реєстрація команди" : "Team registration"}
                />
            </div>
        </div>
    );
};
