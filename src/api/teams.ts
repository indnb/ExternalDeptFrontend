import axios from "axios";

const API_URL = "http://0.0.0.0:8181/api/hackathon_2024/team";

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

export const getAllTeams = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error: any) {
        console.error("Ошибка при получении списка команд:", error.response?.data || error.message);
        throw new Error("Не удалось получить команды");
    }
};

export const updateTeam = async (teamData: any) => {
    try {
        const response = await axios.put(`${API_URL}/by_data`, teamData, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error: any) {
        console.error("Ошибка при обновлении команды:", error.response?.data || error.message);
        throw new Error("Не удалось обновить команду");
    }
};

export const deleteTeam = async (teamId: number) => {
    try {
        const response = await axios.delete(`${API_URL}/by_id/${teamId}`, {
            headers: getAuthHeaders(),
        });
        return response.data;
    } catch (error: any) {
        console.error("Ошибка при удалении команды:", error.response?.data || error.message);
        throw new Error("Не удалось удалить команду");
    }
};
