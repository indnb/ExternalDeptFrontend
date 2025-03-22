import { ActionButton } from "@/Atoms/ActionButton";

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
    const values = [team.id, team.name, team.category, team.nickname_tg];

    return (
        <tr className="border border-gray-600 text-white bg-gray-800">
            {values.map((value, index) => (
                <td key={index} className="p-2 border border-gray-600 text-center">
                    {value}
                </td>
            ))}
            <td className="p-2 border border-gray-600 text-center">
                <ActionButton onClick={() => onEdit(team)} text="Edit" icon="✏️" className="bg-blue-500 text-white hover:bg-blue-600" />
                <ActionButton onClick={() => onDelete(team.id)} text="Delete" icon="🗑️" className="bg-red-500 text-white hover:bg-red-600 ml-2" />
            </td>
        </tr>
    );
}
