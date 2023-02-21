import { createStore, combineReducers } from "redux";
import { unsplashPhotoStore } from "./unspalshPhotoStore";

const rootReducer = combineReducers({
  photos: unsplashPhotoStore,
});

export const store = createStore(rootReducer);
