import axios from "axios";

const API = axios.create({ baseURL: "https://job-search-portal.herokuapp.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

export const fetchJobs = () => API.get(`/jobs`);
export const fetchFavoriteJobs = () => API.get(`/jobs/favoritePosts`);
export const fetchJobsBySearchText = (searchQuery) => API.get(`/jobs/searchByText?searchText=${searchQuery.search}`);
export const fetchJobsBySearch = (searchQuery) =>
  API.get(`/jobs/search?jobType=${searchQuery.jobType}&jobTitle=${searchQuery.jobTitle || "none"}&state=${searchQuery.state || "none"}&city=${searchQuery.city || "none"}`);
export const createJob = (newJob) => API.post("/jobs", newJob);
export const likeJob = (id) => API.patch(`/jobs/${id}/likePost`);
export const updateJob = (id, updatedJob) => API.patch(`/jobs/${id}`, updatedJob);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
