import React from "react";
import IndividualPhoto from "./IndividualPhoto/IndividualPhoto";

export default function Photo({ photos }) {
  // console.log("222222", photos);
  return photos.map((photo) => (
    <IndividualPhoto key={photo.id} photo={photo} />
  ));
}
