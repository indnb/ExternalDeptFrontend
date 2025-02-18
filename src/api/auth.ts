import api from "./axiosInstance";

// Интерфейс для логина
export interface LoginData {
    admin_name: string;
    admin_password: string;
}

// Функция авторизации (POST /api/admin/login)
export const login = async (data: LoginData) => {
    const response = await api.post("/api/admin/login", data);

    const token = response.data; // Сервер возвращает JWT-токен как строку
    if (!token) {
        throw new Error("Ошибка при получении токена.");
    }

    localStorage.setItem("token", token); // Сохраняем токен
    return token;
};

// Функция проверки авторизации (GET /api/admin/get)
export const checkAdminAuth = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        throw new Error("Токен отсутствует. Авторизуйтесь заново.");
    }

    const response = await api.get("/api/admin/get", {
        headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
};

// Функция проверки, истёк ли токен
export const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Декодируем JWT
        return payload.exp * 1000 > Date.now(); // Проверяем срок действия
    } catch {
        return false;
    }
};
