import { useGetCaptain } from "@/hook/useCaptain";
import { CaptinRow, ICaptain } from "@/Molecules/CaptainRow";
import { TableHead } from "@/Molecules/TableHead";
import { useState } from "react";
import React from 'react'
import { CaptinHeadTableData } from "./captainManagment.data";
import { EditCaptainModal } from "../EditCaptainModal";
import { useDeleteCaptainMutation } from "@/api/CaptainApi/useCaptainMutation";

export const CaptainManagmet = () => {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterId, setFilterId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<ICaptain | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const deleteCaptainMutation = useDeleteCaptainMutation()
  const { data, } = useGetCaptain()
  const handleEditClick = (team: ICaptain) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };


  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this participant?")) {
      try {
        deleteCaptainMutation.mutateAsync(id)
      } catch (error) {
        console.error("Error deleting participant:", error);
        setError("Failed to delete participant");
      }
    }
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
      {error && <div>error</div>
      }
      <table className="w-full border-collapse">
        <TableHead data={CaptinHeadTableData} />
        <tbody>
          {data?.map((elem) => (
            <CaptinRow
              key={elem.team_id}
              participant={elem}
              onDelete={handleDelete}
              onEdit={handleEditClick}
            />
          ))}

        </tbody>
      </table>
      {isModalOpen && selectedTeam && (
        <EditCaptainModal team={selectedTeam}
          closeModal={() => setIsModalOpen(false)}
          onSave={() => setIsModalOpen(false)} />
      )}

    </div>
  )
}
