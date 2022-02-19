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

    // GET PRODUCT
    getJobSuccess(state, action) {
      state.isLoading = false;
      state.job = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const { startLoading } = slice.actions;
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
