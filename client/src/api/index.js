import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

export const fetchJobs = () => API.get(`/jobs`);
export const fetchJobsBySearch = (searchQuery) => API.get(`/jobs/search?searchQuery=${searchQuery.search || "none"}&tags=${searchQuery.tags}`);
export const createJob = (newJob) => API.post("/jobs", newJob);
export const likeJob = (id) => API.patch(`/jobs/${id}/likeJob`);
export const updateJob = (id, updatedJob) => API.patch(`/jobs/${id}`, updatedJob);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
