import { useState } from "react";
import { updateUniversity } from "@/api/universities";

export default function EditUniversityModal({
                                                university,
                                                closeModal,
                                                onSave, // ✅ Добавлен новый пропс
                                            }: {
    university: { id: number; name: string };
    closeModal: () => void;
    onSave: (updatedUniversity: { id: number; name: string }) => void; // ✅ Добавлено
}) {
    const [name, setName] = useState(university.name);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            await updateUniversity(university.id, name);
            onSave({ id: university.id, name }); // ✅ Исправлено
            closeModal();
        } catch (err) {
            console.error("Ошибка при обновлении университета:", err);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Редактировать университет</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />
                    <div className="flex justify-between">
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Сохранить</button>
                        <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
