import axios from "axios";

const API_URL = "http://0.0.0.0:8181/api/hackathon_2024/user";

// Функция для получения заголовков с токеном
const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Ошибка: нет токена авторизации. Войдите заново.");
    }
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
};

export const getAllParticipants = async () => {
    const response = await axios.get(`${API_URL}/all`, { headers: getAuthHeaders() });
    return response.data;
};

export const getParticipantById = async (id: number) => {
    const response = await axios.get(`${API_URL}/by_id/${id}`, { headers: getAuthHeaders() });
    return response.data;
};

export const getParticipantsByTeam = async (teamId: number) => {
    const response = await axios.get(`${API_URL}/by_team/${teamId}`, { headers: getAuthHeaders() });
    return response.data;
};

export const getParticipantsByUniversity = async (universityId: number) => {
    const response = await axios.get(`${API_URL}/by_university/${universityId}`, { headers: getAuthHeaders() });
    return response.data;
};

export const updateParticipant = async (id: number, participantData: any) => {
    const response = await axios.put(`${API_URL}/by_id/${id}`, participantData, { headers: getAuthHeaders() });
    return response.data;
};

export const deleteParticipant = async (id: number) => {
    const response = await axios.delete(`${API_URL}/by_id/${id}`, { headers: getAuthHeaders() });
    return response.data;
};
