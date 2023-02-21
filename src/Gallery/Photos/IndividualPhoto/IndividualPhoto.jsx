import React from "react";
import { Link } from "react-router-dom";
export default function IndividualPhoto({ photo }) {
  return (
    <div>
      <Link to="preferredPhoto">
        <img
          className="h-[400px] w-[500px] "
          src={photo.urls.small}
          alt="unsplash images"
        />
      </Link>
    </div>
  );
}
