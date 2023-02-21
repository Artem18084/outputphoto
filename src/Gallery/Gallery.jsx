import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../AsyncAction/AsyncAction";
import { emptyOutAction } from "../Store/unsplashPhotoStore";
import Photos from "./Photos/Photos";

export default function Gallery() {
  const photos = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyOutAction());
    dispatch(fetchPhotos());
  }, []);
  return (
    <div>
      <p>{photos.length < 1 ? "defolt" : console.log("photos", photos)}</p>
      <div className=" flex flex-row justify-center  flex-wrap gap-1 ">
        {photos.length && <Photos photos={photos} />}
      </div>
    </div>
  );
}
