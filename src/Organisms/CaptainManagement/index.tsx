import { useGetCaptain } from "@/hook/useCaptain";
import { CaptinRow } from "@/Molecules/CaptainRow";
import { ParticipantRow } from "@/Molecules/ParticipantRow";
import { TableHead } from "@/Molecules/TableHead";
import { useEffect, useState, useCallback } from "react";
import React from 'react'
import { CaptinHeadTableData } from "./captainManagment.data";
export const CaptainManagmet = () => {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterId, setFilterId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { data, } = useGetCaptain()




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
      <table className="w-full border-collapse">
        <TableHead data={CaptinHeadTableData} />
        <tbody>
          {data?.map((elem) => (
            <CaptinRow
              key={elem.id}
              participant={elem}
              onDelete={() => { }}
              onEdit={() => { }}
            />
          ))}

        </tbody>
      </table>
    </div>
  )
}
