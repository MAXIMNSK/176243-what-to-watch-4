import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/app.jsx";

const filmData = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const root = document.getElementById(`root`);
ReactDOM.render(<App filmInfo = {filmData}/>, root);
