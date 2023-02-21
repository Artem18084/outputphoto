import { addManyPhotoAction } from "../Store/unspalshPhotoStore";

export const fetchPhotos = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyPhotoAction(json)));
  };
};
