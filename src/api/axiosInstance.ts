import axios from "axios";

// Жёстко прописываем URL бэкенда (без NEXT_PUBLIC_API_BASE_URL)
const API_BASE_URL = "http://0.0.0.0:8181";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

// Автоматически добавляем токен в заголовки запроса
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
