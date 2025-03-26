import { useState } from "react";
import { createUniversitiesBatch } from "@/api/universities";
import { PopupContainer } from "@/Atoms/PopupContainer";
import { PrimaryButton } from "@/Atoms/PrimaryButton";
import { TextInputField } from "@/Atoms/TextInputField";

interface UniversityCreationFormProps {
    closeModal: () => void;
    onUniversityAdded: () => void;
}

export const UniversityCreationForm = ({ closeModal, onUniversityAdded }: UniversityCreationFormProps) => {
    const [universities, setUniversities] = useState([{ name: "", name_eng: "" }]);

    const addUniversity = () => {
        setUniversities([...universities, { name: "", name_eng: "" }]);
    };

    const updateUniversityField = (index: number, field: "name" | "name_eng", value: string) => {
        const updated = [...universities];
        updated[index][field] = value;
        setUniversities(updated);
    };

    const handleAdd = async () => {
        await createUniversitiesBatch(universities);
        onUniversityAdded();
        closeModal();
    };

    return (
        <PopupContainer closeModal={closeModal}>
            <h2 className="text-xl font-bold mb-4">Add Universities</h2>
            {universities.map((uni, index) => (
                <div key={index} className="mb-2">
                    <TextInputField
                        value={uni.name}
                        onChange={(e) => updateUniversityField(index, "name", e.target.value)}
                        placeholder="Ukrainian Name"
                    />
                    <TextInputField
                        value={uni.name_eng}
                        onChange={(e) => updateUniversityField(index, "name_eng", e.target.value)}
                        placeholder="English Name"
                    />
                </div>
            ))}
            <div className="flex justify-between mt-4">
                <PrimaryButton className="bg-green-600" onClick={addUniversity}>+</PrimaryButton>
                <PrimaryButton className="bg-blue-500" onClick={handleAdd}>Add</PrimaryButton>
                <PrimaryButton className="bg-red-500" onClick={closeModal}>Cancel</PrimaryButton>
            </div>
        </PopupContainer>
    );
};
