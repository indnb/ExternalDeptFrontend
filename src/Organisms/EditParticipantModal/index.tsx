import { useEffect, useState } from "react";
import { getParticipantById, updateParticipant } from "@/api/participants";
import { InputField } from "@/Molecules/InputFieldParticipants";
import { SaveButton, CancelButton } from "@/Atoms/ParticipantButtons";

interface EditParticipantModalProps {
    participantId: number;
    onSave: () => void;
    onClose: () => void;
}

export function EditParticipantModal({ participantId, onSave, onClose }: EditParticipantModalProps) {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        nickname_tg: "",
        phone: "",
        team_id: "",
        university_id: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchParticipant = async () => {
            try {
                setLoading(true);
                const data = await getParticipantById(participantId);
                setFormData({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    nickname_tg: data.nickname_tg,
                    phone: data.phone,
                    team_id: data.team_id?.toString() || "",
                    university_id: data.university_id?.toString() || "",
                });
            } catch {
                setError("Error loading participant data.");
            } finally {
                setLoading(false);
            }
        };

        fetchParticipant();
    }, [participantId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await updateParticipant(participantId, {
                ...formData,
                team_id: parseInt(formData.team_id) || null,
                university_id: parseInt(formData.university_id) || null,
            });
            onSave();
            onClose();
        } catch {
            setError("Error updating participant.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-white">
                <h2 className="text-xl font-bold mb-4">Edit Participant</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <InputField name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
                    <InputField name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
                    <InputField name="nickname_tg" value={formData.nickname_tg} onChange={handleChange} placeholder="Telegram Nickname" />
                    <InputField name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
                    <InputField name="team_id" value={formData.team_id} onChange={handleChange} placeholder="Team ID" />
                    <InputField name="university_id" value={formData.university_id} onChange={handleChange} placeholder="University ID" />
                    <div className="flex justify-between">
                        <SaveButton isLoading={loading} />
                        <CancelButton onClick={onClose} />
                    </div>
                </form>
            </div>
        </div>
    );
}
