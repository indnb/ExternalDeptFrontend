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
  localStorage.setItem("token", token);

  return token;
};


export const checkAdminAuthToken = async (token: string) => {
  try {
    const response = await fetch(`${process.env.API_PORT}/admin/get`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status == 200) {
      return true
    }
    return false

  } catch (e) {
    console.log(e)
  }
}


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
