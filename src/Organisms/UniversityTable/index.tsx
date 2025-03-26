import { UniversityListItem } from "@/Molecules/UniversityListItem";
import { PrimaryButton } from "@/Atoms/PrimaryButton";

interface UniversityTableProps {
    universities: { id: number; name: string; name_eng: string }[];
    isEnglish: boolean;
    onDelete: (id: number) => void;
    onEdit: (university: { id: number; name: string; name_eng: string }) => void;
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

export const UniversityTable = ({
                                    universities,
                                    isEnglish,
                                    onDelete,
                                    onEdit,
                                    currentPage,
                                    totalPages,
                                    setCurrentPage,
                                }: UniversityTableProps) => {
    return (
        <div className="w-full bg-gray-800 p-4 rounded-lg">
            <ul>
                {universities.map((university) => (
                    <UniversityListItem
                        key={university.id}
                        university={university}
                        isEnglish={isEnglish}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center mt-4 space-x-2 items-center">
                <PrimaryButton
                    className="bg-gray-500 text-white"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </PrimaryButton>

                <span className="text-white text-lg font-semibold">
                    Page {currentPage} of {totalPages}
                </span>

                <PrimaryButton
                    className="bg-gray-500 text-white"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </PrimaryButton>
            </div>
        </div>
    );
};
