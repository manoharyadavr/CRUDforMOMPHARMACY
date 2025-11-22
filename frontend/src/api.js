import axios from "axios";

const API = axios.create({
  baseURL: "https://crudformompharmacy.onrender.com/api",
});

export const getProjects = () => API.get("/projects");
export const getProject = (id) => API.get(`/projects/${id}`);
export const createProject = (data) => API.post("/projects", data);
export const updateProject = (id, data) => API.put(`/projects/${id}`, data);
export const deleteProject = (id) => API.delete(`/projects/${id}`);

// More Menu actions
export const toggleArchive = (id) => API.patch(`/projects/${id}/archive`);
export const toggleFavorite = (id) => API.patch(`/projects/${id}/favorite`);
export const duplicateProjectApi = (id) => API.post(`/projects/${id}/duplicate`);

