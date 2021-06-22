import React, { Fragment } from "react";
import Features from "./startPage/Features";
import NewsLetter from "./startPage/NewsLetter";

const StartPage = () => {
  return (
    <Fragment>
      <NewsLetter />
      <Features />
    </Fragment>
  );
};

export default StartPage;
