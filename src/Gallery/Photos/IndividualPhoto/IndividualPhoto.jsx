import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterPhotoAction } from "../../../Store/unsplashPhotoStore";
export default function IndividualPhoto({ photo }) {
  const dispatch = useDispatch();
  console.log(photo);

  return (
    <section>
      <Link to="preferredPhoto">
        <figure>
          <img
            onClick={() => dispatch(filterPhotoAction(photo.id))}
            className="h-[400px] w-[500px] "
            src={photo.urls.small}
            alt="unsplash images"
          />
          <figcaption>
            <strong>{photo.user.username}</strong> <br /> {photo.user.name}
          </figcaption>
        </figure>
      </Link>
    </section>
  );
}
