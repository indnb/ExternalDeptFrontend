import api from "@/api/axiosInstance";

const API_BASE_URL = "/api/hackathon_2024/university";

export const getAllUniversities = async () => {
    try {
        const response = await api.get(`${API_BASE_URL}/all`);
        return response.data;
    } catch (error) {
        console.error("Error fetching universities:", error);
        throw new Error("Failed to load universities");
    }
};

export const getUniversityById = async (id: number) => {
    try {
        const response = await api.get(`${API_BASE_URL}/by_id/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching university by ID:", error);
        throw new Error("Failed to fetch university");
    }
};

export const createUniversity = async (name: string, name_eng: string) => {
    try {
        const response = await api.post(`${API_BASE_URL}/create`, { name, name_eng });
        return response.data;
    } catch (error) {
        console.error("Error adding university:", error);
        throw new Error("Failed to add university");
    }
};

export const createUniversitiesBatch = async (universities: { name: string; name_eng: string }[]) => {
    try {
        const response = await api.post(`${API_BASE_URL}/create_by_vec`, universities);
        return response.data;
    } catch (error) {
        console.error("Error batch adding universities:", error);
        throw new Error("Failed to add universities");
    }
};

export const updateUniversity = async (id: number, name: string, name_eng: string) => {
    try {
        console.log("Sending update request:", { id, name, name_eng }); // Debug log
        const response = await api.put(`${API_BASE_URL}/by_id/${id}`, { name, name_eng });
        console.log("Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating university:", error);
        throw new Error("Failed to update university");
    }
};

export const deleteUniversity = async (id: number) => {
    try {
        await api.delete(`${API_BASE_URL}/by_id/${id}`);
    } catch (error) {
        console.error("Error deleting university:", error);
        throw new Error("Failed to delete university");
    }
};
