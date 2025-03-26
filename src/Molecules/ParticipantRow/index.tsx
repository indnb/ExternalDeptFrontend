import { ActionButton } from "@/Atoms/ActionButton";

interface Participant {
    id: number;
    first_name: string;
    last_name: string;
    nickname_tg: string;
    phone: string;
    university_id: number;
    team_id: number;
}

interface ParticipantRowProps {
    participant: Participant;
    onEdit: (participant: Participant) => void;
    onDelete: (id: number) => void;
}

export function ParticipantRow({ participant, onEdit, onDelete }: ParticipantRowProps) {
    const values = [
        participant.id,
        participant.first_name,
        participant.last_name,
        participant.nickname_tg,
        participant.phone,
        participant.university_id,
        participant.team_id,
    ];

    return (
        <tr className="border border-gray-700 bg-gray-800 text-white">
            {values.map((value, index) => (
                <td key={index} className="p-2 border border-gray-700 text-center">
                    {value}
                </td>
            ))}
            <td className="p-2 border border-gray-700 text-center">
                <ActionButton onClick={() => onEdit(participant)} text="Edit" icon="✏️" className="bg-blue-500 text-white hover:bg-blue-600" />
                <ActionButton onClick={() => onDelete(participant.id)} text="Delete" icon="🗑️" className="bg-red-500 text-white hover:bg-red-600 ml-2" />
            </td>
        </tr>
    );
}
