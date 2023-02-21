import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterPhotoAction } from "../../../Store/unsplashPhotoStore";
export default function IndividualPhoto({ photo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="preferredPhoto">
        <figure>
          <img
            onClick={() => dispatch(filterPhotoAction(photo.id))}
            className="h-[400px] w-[500px] "
            src={photo.urls.small}
            alt="unsplash images"
          />
          <figcaption>{photo.author}</figcaption>
        </figure>
      </Link>
    </div>
  );
}
