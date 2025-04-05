import React from 'react'
export interface ITableProps {
  data: string[]
}
export const TableHead: React.FC<ITableProps> = ({ data }) => {
  return (
    <thead>
      <tr className="bg-gray-600 text-white">
        {data?.map((elem: string, key) =>
          <th key={key} className="p-2 border border-gray-700">{elem}</th>
        )}
      </tr>
    </thead>

  )
}
