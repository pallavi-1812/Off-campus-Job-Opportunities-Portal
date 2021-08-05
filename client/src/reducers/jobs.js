import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING, FETCH_BY_SEARCH_TEXT, FETCH_FAVORITES } from "../constants/actionTypes";

const JobReducer = (state = { isLoading: true, jobs: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        jobs: action.payload,
      };
    case FETCH_BY_SEARCH:
      return { ...state, jobs: action.payload };
    case FETCH_BY_SEARCH_TEXT:
      return { ...state, jobs: action.payload };
    case FETCH_FAVORITES:
      return { ...state, jobs: action.payload };
    case LIKE:
      return { ...state, jobs: state.jobs.map((job) => (job._id === action.payload._id ? action.payload : job)) };
    case CREATE:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case UPDATE:
      return { ...state, jobs: state.jobs.map((job) => (job._id === action.payload._id ? action.payload : job)) };
    case DELETE:
      return { ...state, jobs: state.jobs.filter((job) => job._id !== action.payload) };
    default:
      return state;
  }
};

export default JobReducer;