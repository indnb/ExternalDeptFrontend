import api from "./axiosInstance";


export interface LoginData {
  admin_name: string;
  admin_password: string;
}


export const login = async (data: LoginData) => {
  const response = await api.post("/admin/login", data);

  const token = response.data;
  if (!token) {
    throw new Error("Ошибка при получении токена.");
  }
  await fetch("/api/set-cookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  localStorage.setItem("token", token);

  return token;
};


export const checkAdminAuth = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Токен отсутствует. Авторизуйтесь заново.");
  }

  const response = await api.get("/admin/get", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};


export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};
