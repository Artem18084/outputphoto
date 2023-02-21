import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import GetBackBTN from "../UI/GetBackBTN";

export default function PhotoItems() {
  const photo = useSelector((state) => state.photos.photos);

  return (
    <article className="flex h-screen  flex-col items-center justify-center">
      <img
        className="h-[500px] w-[700px] mb-5"
        src={photo[0].urls.raw}
        alt=""
      />

      <Link to="/">
        <GetBackBTN />
      </Link>
    </article>
  );
}
