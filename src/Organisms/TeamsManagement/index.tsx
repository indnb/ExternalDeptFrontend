import { useEffect, useState } from "react";
import { getAllTeams, deleteTeam } from "@/api/teams";
import { EditTeamModal } from "@/Organisms/EditTeamModal";
import { TeamRow } from "@/Molecules/TeamRow";

interface Team {
    id: number;
    name: string;
    category: string;
    nickname_tg: string;
}

export function TeamsManagement() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const data = await getAllTeams();
            setTeams(data);
        } catch (error) {
            console.error("Error fetching teams:", error);
        }
    };

    const handleEditClick = (team: Team) => {
        setSelectedTeam(team);
        setIsModalOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this team?")) {
            try {
                await deleteTeam(id);
                await fetchTeams();
            } catch (error) {
                console.error("Error deleting team:", error);
            }
        }
    };

    const handleSave = async () => {
        await fetchTeams();
        setIsModalOpen(false);
    };

    return (
        <div className="mt-6 bg-gray-900 shadow-lg p-4 rounded-lg">
            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-gray-700 text-white">
                    <th className="p-2 border border-gray-600">ID</th>
                    <th className="p-2 border border-gray-600">Name</th>
                    <th className="p-2 border border-gray-600">Category</th>
                    <th className="p-2 border border-gray-600">Telegram</th>
                    <th className="p-2 border border-gray-600">Actions</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team) => (
                    <TeamRow key={team.id} team={team} onEdit={handleEditClick} onDelete={handleDelete} />
                ))}
                </tbody>
            </table>

            {isModalOpen && selectedTeam && (
                <EditTeamModal team={selectedTeam} closeModal={() => setIsModalOpen(false)} onSave={handleSave} />
            )}
        </div>
    );
}
