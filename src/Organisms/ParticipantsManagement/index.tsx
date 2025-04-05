import { useEffect, useState, useCallback } from "react";
import { getAllParticipants, deleteParticipant, getParticipantsByUniversity, getParticipantsByTeam } from "@/api/participants";
import { ParticipantRow } from "@/Molecules/ParticipantRow";
import { EditParticipantModal } from "../EditParticipantModal"; // Убедись, что путь правильный

interface Participant {
  id: number;
  first_name: string;
  last_name: string;
  nickname_tg: string;
  phone: string;
  university_id: number;
  team_id: number;
}

export function ParticipantsManagement() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string>("all");
  const [filterId, setFilterId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchParticipants = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let data;
      if (filterType === "university" && filterId) {
        data = await getParticipantsByUniversity(parseInt(filterId));
      } else if (filterType === "team" && filterId) {
        data = await getParticipantsByTeam(parseInt(filterId));
      } else {
        data = await getAllParticipants();
      }
      setParticipants(data);
    } catch (error) {
      console.error("Error fetching participants:", error);
      setError("Error fetching participants");
    } finally {
      setLoading(false);
    }
  }, [filterType, filterId]);

  useEffect(() => {
    fetchParticipants();
  }, [fetchParticipants]);

  const handleEditClick = (participant: Participant) => {
    setSelectedParticipant(participant);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this participant?")) {
      try {
        await deleteParticipant(id);
        fetchParticipants();
      } catch (error) {
        console.error("Error deleting participant:", error);
        setError("Failed to delete participant");
      }
    }
  };

  const handleSave = async () => {
    fetchParticipants();
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex gap-4 mb-4">
        <select
          className="p-2 bg-gray-700 text-white rounded"
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value="all">All</option>
          <option value="university">By University</option>
          <option value="team">By Team</option>
        </select>

        {filterType !== "all" && (
          <input
            type="text"
            placeholder="Enter ID"
            className="p-2 bg-gray-700 text-white rounded"
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
          />
        )}
      </div>

      {loading && <p className="text-yellow-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-600 text-white">
            <th className="p-2 border border-gray-700">ID</th>
            <th className="p-2 border border-gray-700">First Name</th>
            <th className="p-2 border border-gray-700">Last Name</th>
            <th className="p-2 border border-gray-700">Phone</th>
            <th className="p-2 border border-gray-700">Telegram</th>
            <th className="p-2 border border-gray-700">University</th>
            <th className="p-2 border border-gray-700">Team</th>
            <th className="p-2 border border-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.length > 0 ? (
            participants.map((participant) => (
              <ParticipantRow key={participant.id} participant={participant} onEdit={handleEditClick} onDelete={handleDelete} />
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center p-4 text-gray-300">
                No participants found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && selectedParticipant && (
        <EditParticipantModal participantId={selectedParticipant.id} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
      )}
    </div>
  );
}
