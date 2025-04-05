import axios from "axios";

const API_URL = `${process.env.API_PORT}/hackathon_2025/team`;

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("Error: No authentication token found. Please log in again.");
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
    console.error("Error fetching teams:", error.response?.data || error.message);
    throw new Error("Failed to fetch teams");
  }
};

export const updateTeam = async (teamData: any) => {
  try {
    const response = await axios.put(`${API_URL}/by_data`, teamData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    console.error("Error updating team:", error.response?.data || error.message);
    throw new Error("Failed to update team");
  }
};

export const deleteTeam = async (teamId: number) => {
  try {
    const response = await axios.delete(`${API_URL}/by_id/${teamId}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error: any) {
    console.error("Error deleting team:", error.response?.data || error.message);
    throw new Error("Failed to delete team");
  }
};
