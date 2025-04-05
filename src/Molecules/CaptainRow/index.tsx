import { ActionButton } from "@/Atoms/ActionButton";

export interface ICaptain {
  captain_id: number
  team_id: number;
}

interface CaptainRowProps {
  participant: ICaptain;
  onEdit: (participant: ICaptain) => void;
  onDelete: (id: number) => void;
}


export function CaptinRow({ participant, onEdit, onDelete }: CaptainRowProps) {
  const values = [
    participant.captain_id,
    participant.team_id,
  ];

  return (
    <tr className="border border-gray-700 bg-gray-800 text-white">
      {values.map((value, index) => (
        <td key={index} className="p-2 border border-gray-700 text-center"> {value} </td>
      ))}
      <td className="p-2 border border-gray-700 text-center">
        <ActionButton onClick={() => onEdit(participant)} text="Edit" icon="✏️" className="bg-blue-500 text-white hover:bg-blue-600" />
        <ActionButton onClick={() => onDelete(participant.team_id)} text="Delete" icon="🗑️" className="bg-red-500 text-white hover:bg-red-600 ml-2" />
      </td>
    </tr>
  );
}

