import { createSlice } from "@reduxjs/toolkit";

// utils
import axios from "axios";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  jobs: [],
  job: null,
  newJob: null,
  sortBy: null,
};

const slice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getJobsSuccess(state, action) {
      state.isLoading = false;
      state.jobs = action.payload;
    },
    // GET PRODUCTS
    getJobSuccess(state, action) {
      state.isLoading = false;
      state.job = action.payload;
    },

    // CREATE JOB
    createJobSuccess(state, action) {
      state.isLoading = false;
      state.newJob = action.payload;
    },
    // UPDATE JOB
    updateJobSuccess(state, action) {
      state.isLoading = false;
      state.job = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const {
  startLoading,
  hasError,
  getJobSuccess,
  getJobsSuccess,
  createJobSuccess,
} = slice.actions;
// ----------------------------------------------------------------------

export function getJobs() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/jobs");
      dispatch(slice.actions.getJobsSuccess(response.data.jobs));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getJob(id) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/jobs/id", {
        params: { id },
      });
      dispatch(slice.actions.getJobSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function createJob(job) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/jobs", job);
      dispatch(slice.actions.createJobSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateJob(id, good) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.put("/api/jobs/", good, {
        params: { id },
      });
      dispatch(slice.actions.createJobSuccess(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
