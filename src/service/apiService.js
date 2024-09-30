// src/apiService.js
import axios from 'axios';

const API = import.meta.env.VITE_API;

const getProjects = () => axios.get(`${API}/projects/all`);
const getProjectByID = (id) => axios.get(`${API}/projects/all/${id}`);
const addProject = (projectData) => axios.post(`${API}/projects/add`, projectData);
const editProject = (id, editeddata) => axios.put(`${API}/projects/edit/${id}`, editeddata);
const deleteProject = (id) => axios.delete(`${API}/projects/delete/${id}`);

export { getProjects, getProjectByID, addProject, editProject, deleteProject };
