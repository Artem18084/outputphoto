const initialState = { photos: [] };
const addManyPhoto = "ADD_MANY_PHOTOS";
const empty_out = "AMPTY_OUT";

export const unsplashPhotoStore = (state = initialState, action) => {
  switch (action.type) {
    case addManyPhoto:
      return { ...state, photos: [...state.photos, ...action.payload] };
    case empty_out:
      return { ...state, photos: [] };
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
