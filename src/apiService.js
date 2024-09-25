// src/apiService.js
import axios from 'axios';

const API = "https://66ea551e55ad32cda47864a4.mockapi.io";

const getProjects = () => axios.get(`${API}/projects`);
const getProjectByID = (id) => axios.get(`${API}/projects/${id}`);
const addProject = (projectData) => axios.post(`${API}/projects`, projectData);
const editProject = (id, projectData) => axios.put(`${API}/projects/${id}`, projectData);
const deleteProject = (id) => axios.delete(`${API}/projects/${id}`);

export { getProjects, getProjectByID, addProject, editProject, deleteProject };
