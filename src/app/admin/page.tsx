"use client";

import React, { useEffect, useState } from "react";
import UniversityForm from "@/components/UniversityForm";
import EditUniversityModal from "@/components/EditUniversityModal";
import UniversityList from "@/components/UniversityList";
import {
    getAllUniversities,
    updateUniversity,
    deleteUniversity
} from "@/api/universities";

interface University {
    id: number;
    name: string;
}

const AdminPage: React.FC = () => {
    const [universities, setUniversities] = useState<University[]>([]);
    const [editingUniversity, setEditingUniversity] = useState<University | null>(null);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const universitiesPerPage = 10;

    const fetchData = async () => {
        try {
            const data = await getAllUniversities();
            setUniversities(data);
        } catch (err) {
            console.error("Error fetching universities:", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEditUniversity = async (updatedUniversity: University) => {
        try {
            await updateUniversity(updatedUniversity.id, updatedUniversity.name);
            setEditingUniversity(null);
            fetchData();
        } catch (err) {
            console.error("Error updating university:", err);
        }
    };

    const handleDeleteUniversity = async (id: number) => {
        try {
            await deleteUniversity(id);
            fetchData();
        } catch (err) {
            console.error("Error deleting university:", err);
        }
    };

    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = universities.slice(indexOfFirstUniversity, indexOfLastUniversity);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6 mt-28">
            <h1 className="text-3xl font-bold mb-6">University Management</h1>

            <button
                className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowAddModal(true)}
            >
                Add University
            </button>

            {showAddModal && (
                <UniversityForm
                    closeModal={() => setShowAddModal(false)}
                    onUniversityAdded={fetchData}
                />
            )}

            {editingUniversity && (
                <EditUniversityModal
                    university={editingUniversity}
                    closeModal={() => setEditingUniversity(null)}
                    onSave={handleEditUniversity}
                />
            )}

            <div className="w-[1500px] bg-gray-800 p-6 rounded-lg shadow-lg">
                <UniversityList
                    universities={currentUniversities}
                    onDelete={handleDeleteUniversity}
                    onEdit={setEditingUniversity}
                />
            </div>

            <div className="flex gap-2 mt-4">
                <button
                    className="bg-gray-700 px-4 py-2 rounded"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="px-4 py-2 bg-gray-800 rounded">
                    {currentPage} / {Math.ceil(universities.length / universitiesPerPage)}
                </span>
                <button
                    className="bg-gray-700 px-4 py-2 rounded"
                    disabled={indexOfLastUniversity >= universities.length}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AdminPage;
