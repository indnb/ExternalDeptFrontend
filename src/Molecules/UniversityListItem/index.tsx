import { PrimaryButton } from "@/Atoms/PrimaryButton";

interface UniversityListItemProps {
    university: { id: number; name: string; name_eng: string };
    isEnglish: boolean;
    onDelete: (id: number) => void;
    onEdit: (university: { id: number; name: string; name_eng: string }) => void;
}

export const UniversityListItem = ({ university, isEnglish, onDelete, onEdit }: UniversityListItemProps) => {
    return (
        <li className="flex justify-between items-center p-4 border-b border-gray-600">
            <span className="text-white">
                {isEnglish ? university.name_eng : university.name}
            </span>
            <div>
                <PrimaryButton className="bg-blue-500" onClick={() => onEdit(university)}>Edit</PrimaryButton>
                <PrimaryButton className="bg-red-500 ml-2" onClick={() => onDelete(university.id)}>Delete</PrimaryButton>
            </div>
        </li>
    );
};
