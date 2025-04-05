"use client";
import "src/app/globals.css";
import { useEffect, useState } from "react";
import { getAllUniversities, deleteUniversity } from "@/api/universities";
import { UniversityTable } from "@/Organisms/UniversityTable";
import { UniversityCreationForm } from "@/Organisms/UniversityCreationForm";
import { UniversityEditor } from "@/Organisms/UniversityEditor";
import { PrimaryButton } from "@/Atoms/PrimaryButton";
import { TeamsManagement } from "@/Organisms/TeamsManagement";
import { ParticipantsManagement } from "@/Organisms/ParticipantsManagement";
import { LanguageToggle } from "@/Atoms/LanguageToggle";
import { CaptainManagmet } from "@/Organisms/CaptainManagement";

export default function AdminPage() {
  const [universities, setUniversities] = useState<{ id: number; name: string; name_eng: string }[]>([]);
  const [editingUniversity, setEditingUniversity] = useState<{ id: number; name: string; name_eng: string } | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getAllUniversities().then(setUniversities);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUniversities = universities.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(universities.length / itemsPerPage);

  return (
    <div className="bg-gray-900 min-h-screen p-6 pt-32">
      <h1 className="bg-gray-800 text-3xl font-bold mb-6 text-center">University Management</h1>

      <div className="flex justify-between mb-6">
        <PrimaryButton className="bg-green-500 text-white" onClick={() => setShowAddModal(true)}>
          Add University
        </PrimaryButton>
        <LanguageToggle isEnglish={isEnglish} toggleLanguage={() => setIsEnglish(!isEnglish)} />
      </div>

      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[1000px] max-w-[1000px]">
            <UniversityCreationForm
              closeModal={() => setShowAddModal(false)}
              onUniversityAdded={async () => setUniversities(await getAllUniversities())}
            />
          </div>
        </div>
      )}

      {editingUniversity && (
        <UniversityEditor
          university={editingUniversity}
          closeModal={() => setEditingUniversity(null)}
          onSave={async () => setUniversities(await getAllUniversities())}
        />
      )}

      <UniversityTable
        universities={currentUniversities}
        isEnglish={isEnglish}
        onEdit={(university) => setEditingUniversity(university)}
        onDelete={async (id) => {
          await deleteUniversity(id);
          setUniversities(await getAllUniversities());
        }}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      <hr className="border-gray-600 my-12" />

      <h1 className="bg-gray-800 text-3xl font-bold mb-6 text-center">Teams Management</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <TeamsManagement />
      </div>

      <hr className="border-gray-600 my-12" />
      <h1 className="bg-gray-800 text-3xl font-bold mb-6 text-center">Teams Captain</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <CaptainManagmet />
      </div>
      <hr className="border-gray-600 my-12" />


      <h1 className="bg-gray-800 text-3xl font-bold mb-6 text-center">Participants Management</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <ParticipantsManagement />
      </div>
    </div>
  );
}
