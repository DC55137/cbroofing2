import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import galleryReducer from "./slices/gallery";
import jobsReducer from "./slices/jobs";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  gallery: galleryReducer,
  jobs: jobsReducer,
});

export { rootPersistConfig, rootReducer };
