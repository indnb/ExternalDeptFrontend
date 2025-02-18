import api from "@/api/axiosInstance";

const API_BASE_URL = "/api/hackathon_2024/university";

// ✅ Получить все университеты
export const getAllUniversities = async () => {
    try {
        const response = await api.get(`${API_BASE_URL}/all`);
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении университетов:", error);
        throw new Error("Не удалось загрузить университеты");
    }
};

// ✅ Добавить университет (с проверкой на дубликаты)
export const createUniversity = async (name: string) => {
    try {
        const existingUniversities = await getAllUniversities();
        if (existingUniversities.some((u: { name: string }) => u.name === name)) {
            throw new Error("Такой университет уже существует!");
        }

        const response = await api.post(`${API_BASE_URL}/create`, { name });
        return response.data;
    } catch (error) {
        console.error("Ошибка при добавлении университета:", error);
        throw new Error("Не удалось добавить университет");
    }
};

// ✅ Массовое добавление университетов
export const createUniversitiesBatch = async (names: string[]) => {
    try {
        const existingUniversities = await getAllUniversities();
        const newNames = names.filter(name => !existingUniversities.some((u: { name: string }) => u.name === name));

        if (newNames.length === 0) {
            throw new Error("Все введенные университеты уже существуют!");
        }

        const response = await api.post(`${API_BASE_URL}/create_by_vec`, newNames.map(name => ({ name })));
        return response.data;
    } catch (error) {
        console.error("Ошибка при массовом добавлении университетов:", error);
        throw new Error("Не удалось добавить университеты");
    }
};

// ✅ Обновить университет по ID
export const updateUniversity = async (id: number, name: string) => {
    try {
        const response = await api.put(`${API_BASE_URL}/by_id/${id}`, { name });
        return response.data;
    } catch (error) {
        console.error("Ошибка при обновлении университета:", error);
        throw new Error("Не удалось обновить университет");
    }
};

// ✅ Удалить университет по ID
export const deleteUniversity = async (id: number) => {
    try {
        await api.delete(`${API_BASE_URL}/by_id/${id}`);
    } catch (error) {
        console.error("Ошибка при удалении университета:", error);
        throw new Error("Не удалось удалить университет");
    }
};
