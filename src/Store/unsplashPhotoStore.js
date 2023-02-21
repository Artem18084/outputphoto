const initialState = { photos: [] };
const addManyPhoto = "ADD_MANY_PHOTOS";
const empty_out = "EMPTY_OUT";
const filterPhotos = "FILTER_PHOTO";

export const unsplashPhotoStore = (state = initialState, action) => {
  switch (action.type) {
    case addManyPhoto:
      return { ...state, photos: [...state.photos, ...action.payload] };
    case empty_out:
      return { ...state, photos: [] };
    case filterPhotos:
      return {
        ...state,
        photos: state.photos.filter((item) => item.id === action.payload),
      };
    default:
      return state;
  }
};

export const addManyPhotoAction = (payload) => ({
  type: addManyPhoto,
  payload,
});

export const emptyOutAction = (payload) => ({
  type: empty_out,
  payload,
});

export const filterPhotoAction = (payload) => ({
  type: filterPhotos,
  payload,
});
