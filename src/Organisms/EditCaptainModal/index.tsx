import { useChangeCaptain } from "@/hook/useCaptain";
import { useFormHandler } from "@/hook/useFormHandler";
import { ICaptain } from "@/Molecules/CaptainRow";
import { InputField } from "@/Molecules/InputFieldTeams";
import { ModalForm } from "@/Molecules/ModalForm";


interface EditTeamModalProps {
  team: ICaptain;
  closeModal: () => void;
  onSave: () => void;
}

export const EditCaptainModal = ({ team, closeModal, onSave }: EditTeamModalProps) => {
  const { changeCaptain } = useChangeCaptain()
  const { formData, loading, error, handleChange, handleSubmit } = useFormHandler({
    initialData: team,
    submitData: changeCaptain,
    onSave,
    onClose: closeModal,
  });

  return (
    <ModalForm title="Edit Team" error={error} loading={loading} onSubmit={handleSubmit} onClose={closeModal}>
      <InputField name="team Id" value={formData.team_id} onChange={handleChange} placeholder="Name" />
      <InputField name="captain_id" value={formData.captain_id} onChange={handleChange} placeholder="Category" />
    </ModalForm>
  );
}

