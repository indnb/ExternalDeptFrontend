import { EditButton, DeleteButton } from "@/Atoms/ParticipantButtons";

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
    return (
        <tr className="border border-gray-700 bg-gray-800 text-white">
            <td className="p-2 border border-gray-700 text-center">{participant.id}</td>
            <td className="p-2 border border-gray-700">{participant.first_name}</td>
            <td className="p-2 border border-gray-700">{participant.last_name}</td>
            <td className="p-2 border border-gray-700">{participant.nickname_tg}</td>
            <td className="p-2 border border-gray-700">{participant.phone}</td>
            <td className="p-2 border border-gray-700 text-center">{participant.university_id}</td>
            <td className="p-2 border border-gray-700 text-center">{participant.team_id}</td>
            <td className="p-2 border border-gray-700 text-center">
                <EditButton onClick={() => onEdit(participant)} />
                <DeleteButton onClick={() => onDelete(participant.id)} />
            </td>
        </tr>
    );
}
