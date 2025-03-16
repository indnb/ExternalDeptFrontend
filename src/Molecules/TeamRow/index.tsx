import { EditButton, DeleteButton } from "@/Atoms/TeamButtons";

interface Team {
    id: number;
    name: string;
    category: string;
    nickname_tg: string;
}

interface TeamRowProps {
    team: Team;
    onEdit: (team: Team) => void;
    onDelete: (id: number) => void;
}

export function TeamRow({ team, onEdit, onDelete }: TeamRowProps) {
    return (
        <tr className="border border-gray-600 text-white bg-gray-800">
            <td className="p-2 border border-gray-600 text-center">{team.id}</td>
            <td className="p-2 border border-gray-600">{team.name}</td>
            <td className="p-2 border border-gray-600">{team.category}</td>
            <td className="p-2 border border-gray-600">{team.nickname_tg}</td>
            <td className="p-2 border border-gray-600 text-center">
                <EditButton onClick={() => onEdit(team)} />
                <DeleteButton onClick={() => onDelete(team.id)} />
            </td>
        </tr>
    );
}
