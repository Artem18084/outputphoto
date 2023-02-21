const initialState = { photos: [] };
const addManyPhoto = "ADD_MANY_PHOTOS";

export const unsplashPhotoStore = (state = initialState, action) => {
  switch (action.type) {
    case addManyPhoto:
      return { ...state, photos: [...state.photos, ...action.payload] };

    default:
      return state;
  }
};

export const addManyPhotoAction = (payload) => ({
  type: addManyPhoto,
  payload,
});
