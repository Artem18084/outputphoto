import React from "react";
import { Link } from "react-router-dom";

import GetBackBTN from "../UI/GetBackBTN";

export default function PhotoItems() {
  return (
    <article>
      <section>
        <Link to="/">
        <GetBackBTN />
      </Link>
      </section>
    </article>
  );
}
