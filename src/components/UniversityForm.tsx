import { useState } from "react";
import { createUniversitiesBatch } from "@/api/universities";

export default function UniversityForm({ closeModal, onUniversityAdded }) {
    const [universities, setUniversities] = useState<string[]>([""]);

    const handleAddField = () => {
        setUniversities([...universities, ""]);
    };

    const handleChange = (index: number, value: string) => {
        const updated = [...universities];
        updated[index] = value;
        setUniversities(updated);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validNames = universities.filter((name) => name.trim());

        if (validNames.length === 0) return;

        // Проверка на дубликаты внутри формы
        const uniqueNames = [...new Set(validNames)];
        if (uniqueNames.length < validNames.length) {
            closeModal();
            alert("This university is already in the list!");
            return;
        }

        try {
            await createUniversitiesBatch(uniqueNames);
            onUniversityAdded();
            closeModal();
        } catch (err: any) {
            // Проверяем, не выброшена ли ошибка из-за уже существующих университетов
            if (err.message.includes("существуют")) {
                closeModal();
                alert("One or more universities already exist!");
            } else {
                console.error("Error adding universities:", err);
            }
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Add Universities</h2>
                <form onSubmit={handleSubmit}>
                    {universities.map((name, index) => (
                        <input
                            key={index}
                            type="text"
                            placeholder="Enter university name"
                            value={name}
                            onChange={(e) => handleChange(index, e.target.value)}
                            className="w-full p-2 border rounded mb-2"
                        />
                    ))}
                    <div className="flex justify-between mt-4">
                        <button type="button" onClick={handleAddField} className="bg-gray-300 p-2 rounded">
                            +
                        </button>
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Add
                        </button>
                        <button type="button" onClick={closeModal} className="bg-red-500 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
