import { TextInputField } from "@/Atoms/TextInputField";
import { PrimaryButton } from "@/Atoms/PrimaryButton";

export const UniversityFormInputs = ({ universities, setUniversities }) => {
    return (
        <>
            {universities.map((university, index) => (
                <div key={index} className="flex gap-2">
                    <TextInputField
                        value={university.name}
                        onChange={(e) => {
                            const updated = [...universities];
                            updated[index].name = e.target.value;
                            setUniversities(updated);
                        }}
                        placeholder="Enter university name (Ukrainian)"
                    />
                    <TextInputField
                        value={university.name_eng}
                        onChange={(e) => {
                            const updated = [...universities];
                            updated[index].name_eng = e.target.value;
                            setUniversities(updated);
                        }}
                        placeholder="Enter university name (English)"
                    />
                </div>
            ))}
            <PrimaryButton className="bg-gray-300" onClick={() => setUniversities([...universities, { name: "", name_eng: "" }])}>
                +
            </PrimaryButton>
        </>
    );
};
