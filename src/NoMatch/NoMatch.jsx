import React from "react";
import { Link } from "react-router-dom";

import GetBackBTN from "../UI/GetBackBTN";

import notFound from "../images/notFound.jpg";
export default function NoMatch() {
  return (
    <article className=" flex justify-center items-center">
      <section className="flex flex-col items-center">
        <h1 className="text-6xl ">Whoops!</h1>
        <h2 className="text-xl mb-5">404 Page Not Found</h2>
        <img className="w-[30vw] h-[30vw] mb-5" src={notFound} alt="404" />
        <h3 className="text-base mb-2">
          You can try again now or a little later
        </h3>

        <Link to="/">
          <GetBackBTN />
        </Link>
      </section>
    </article>
  );
}
