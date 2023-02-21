import React from "react";
import IndividualPhoto from "./IndividualPhoto/IndividualPhoto";

export default function Photo({ photos }) {

  return photos.map((photo) => (
    <IndividualPhoto key={photo.id} photo={photo} />
  ));
}
