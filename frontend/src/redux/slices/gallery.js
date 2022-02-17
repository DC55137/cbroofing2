import { createSlice } from "@reduxjs/toolkit";

// utils
import axios from "axios";
//
import { dispatch } from "../store";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  galleries: [],
  gallery: null,
  sortBy: null,
};

const slice = createSlice({
  name: "gallery",
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
    getGalleriesSuccess(state, action) {
      state.isLoading = false;
      state.galleries = action.payload;
    },

    // GET PRODUCT
    getGallerySuccess(state, action) {
      state.isLoading = false;
      state.gallery = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export const { startLoading } = slice.actions;
// ----------------------------------------------------------------------

export function getGalleries() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/galleries");
      dispatch(slice.actions.getGalleriesSuccess(response.data.galleries));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getGallery(id) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/galleries/id", {
        params: { id },
      });
      dispatch(slice.actions.getGallerySuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
