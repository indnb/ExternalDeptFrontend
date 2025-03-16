import { useState } from "react";
import { updateUniversity } from "@/api/universities";
import { TextInputField } from "@/Atoms/TextInputField";
import { PopupContainer } from "@/Atoms/PopupContainer";
import { PrimaryButton } from "@/Atoms/PrimaryButton";

interface University {
    id: number;
    name: string;
    name_eng: string;
}

export const UniversityEditor = ({
                                     university,
                                     closeModal,
                                     onSave,
                                 }: {
    university: University;
    closeModal: () => void;
    onSave: () => Promise<void>;
}) => {
    const [name, setName] = useState(university.name);
    const [nameEng, setNameEng] = useState(university.name_eng);

    const handleSave = async () => {
        try {
            const trimmedName = name.trim();
            const trimmedNameEng = nameEng.trim();

            console.log("Saving university:", { id: university.id, name: trimmedName, name_eng: trimmedNameEng }); // Debug log

            await updateUniversity(university.id, trimmedName, trimmedNameEng);
            await onSave();
            closeModal();
        } catch (error) {
            console.error("Failed to update university:", error);
        }
    };

    return (
        <PopupContainer closeModal={closeModal}>
            <h2 className="text-xl font-bold mb-4">Edit University</h2>

            <TextInputField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter university name (Ukrainian)"
            />

            <TextInputField
                value={nameEng}
                onChange={(e) => setNameEng(e.target.value)}
                placeholder="Enter university name (English)"
                className="mt-2"
            />

            <div className="flex justify-between mt-4">
                <PrimaryButton className="bg-blue-500" onClick={handleSave}>
                    Save
                </PrimaryButton>
                <PrimaryButton className="bg-red-500" onClick={closeModal}>
                    Cancel
                </PrimaryButton>
            </div>
        </PopupContainer>
    );
};
