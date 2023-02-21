import { addManyPhotoAction } from "../Store/unsplashPhotoStore";

export const fetchPhotos = () => {
  return function (dispatch) {
    fetch(
      "https://api.unsplash.com/photos/?client_id=H-EOFouF2ZbAVEU_P1wayQcBNXbjUtKr8u9EkR0tlLw"
    )
      .then((response) => response.json())
      .then((json) => dispatch(addManyPhotoAction(json)));
  };
};
