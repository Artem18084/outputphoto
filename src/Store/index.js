import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { unsplashPhotoStore } from "./unsplashPhotoStore";

const rootReducer = combineReducers({
  photos: unsplashPhotoStore,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
