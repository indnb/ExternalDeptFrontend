import { useState } from "react";
import { updateTeam } from "@/api/teams";
import { InputField } from "@/Molecules/InputFieldTeams";
import { SaveButton, CancelButton } from "@/Atoms/TeamButtons";

interface Team {
    id: number;
    name: string;
    category: string;
    nickname_tg: string;
}

interface EditTeamModalProps {
    team: Team;
    closeModal: () => void;
    onSave: () => void;
}

export function EditTeamModal({ team, closeModal, onSave }: EditTeamModalProps) {
    const [formData, setFormData] = useState<Team>({ ...team });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await updateTeam(formData);
            onSave();
            closeModal();
        } catch {
            setError("Error updating team.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
                <h2 className="text-xl font-bold mb-4">Edit Team</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="text-black">
                    <InputField name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <InputField name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                    <InputField name="nickname_tg" value={formData.nickname_tg} onChange={handleChange} placeholder="Telegram" />
                    <div className="flex justify-between">
                        <SaveButton isLoading={loading} />
                        <CancelButton onClick={closeModal} />
                    </div>
                </form>
            </div>
        </div>
    );
}
