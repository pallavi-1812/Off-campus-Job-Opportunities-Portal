import * as api from "../api/index";
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_BY_SEARCH_TEXT, FETCH_FAVORITES } from "../constants/actionTypes";

export const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchJobs();
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getJobsBySearchText = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchJobsBySearchText(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH_TEXT, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getJobsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchJobsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getFavoriteJobs = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchFavoriteJobs();
    dispatch({ type: FETCH_FAVORITES, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createJob = (job, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createJob(job);
    history.push("./");
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateJob = (id, job, history) => async (dispatch) => {
  try {
    const { data } = await api.updateJob(id, job);
    dispatch({ type: UPDATE, payload: data });
    history.push("./");
  } catch (error) {
    console.log(error);
  }
};
export const deleteJob = (id) => async (dispatch) => {
  try {
    await api.deleteJob(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const likeJob = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeJob(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
