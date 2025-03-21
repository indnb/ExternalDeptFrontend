import { getParticipantById, updateParticipant } from "@/api/participants";
import { useFormHandler } from "@/hook/useFormHandler";
import { InputField } from "@/Molecules/InputFieldParticipants";
import { ModalForm } from "@/Molecules/ModalForm";

interface EditParticipantModalProps {
    participantId: number;
    onSave: () => void;
    onClose: () => void;
}

export function EditParticipantModal({ participantId, onSave, onClose }: EditParticipantModalProps) {
    const { formData, loading, error, handleChange, handleSubmit } = useFormHandler({
        initialData: {
            first_name: "",
            last_name: "",
            nickname_tg: "",
            phone: "",
            team_id: "",
            university_id: "",
        },
        fetchData: () => getParticipantById(participantId),
        submitData: (data) => updateParticipant(participantId, {
            ...data,
            team_id: parseInt(data.team_id) || null,
            university_id: parseInt(data.university_id) || null
        }),
        onSave,
        onClose,
    });

    return (
        <ModalForm title="Edit Participant" error={error} loading={loading} onSubmit={handleSubmit} onClose={onClose}>
            <InputField name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
            <InputField name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
            <InputField name="nickname_tg" value={formData.nickname_tg} onChange={handleChange} placeholder="Telegram Nickname" />
            <InputField name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <InputField name="team_id" value={formData.team_id} onChange={handleChange} placeholder="Team ID" />
            <InputField name="university_id" value={formData.university_id} onChange={handleChange} placeholder="University ID" />
        </ModalForm>
    );
}
