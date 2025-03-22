import { updateTeam } from "@/api/teams";
import { useFormHandler } from "@/hook/useFormHandler";
import { InputField } from "@/Molecules/InputFieldTeams";
import { ModalForm } from "@/Molecules/ModalForm";

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
    const { formData, loading, error, handleChange, handleSubmit } = useFormHandler({
        initialData: team,
        submitData: updateTeam,
        onSave,
        onClose: closeModal,
    });

    return (
        <ModalForm title="Edit Team" error={error} loading={loading} onSubmit={handleSubmit} onClose={closeModal}>
            <InputField name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <InputField name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
            <InputField name="nickname_tg" value={formData.nickname_tg} onChange={handleChange} placeholder="Telegram" />
        </ModalForm>
    );
}
