import React from "react";

interface University {
    id: number;
    name: string;
}

interface UniversityListProps {
    universities: University[];
    onDelete: (id: number) => void;
    onEdit: (university: University) => void;
}

const UniversityList: React.FC<UniversityListProps> = ({ universities, onDelete, onEdit }) => {
    return (
        <ul className="w-full mt-10 border border-gray-600 rounded-lg p-4 bg-gray-800">
            {universities.map((university) => (
                <li
                    key={university.id}
                    className="flex justify-between items-center p-4 relative"
                >
                    <span className="text-lg">{university.name}</span>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => onEdit(university)}
                        >
                            Изменить
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => onDelete(university.id)}
                        >
                            Удалить
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-[5%] w-[90%] h-[1px] bg-gray-700"></div>
                </li>
            ))}
        </ul>
    );
};

export default UniversityList;
