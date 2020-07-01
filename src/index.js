import React from "react";
import ReactDOM from "react-dom";

import App from "../src/components/app.jsx";
import listOtherFilms from "./mocks/film.js";

const root = document.getElementById(`root`);

ReactDOM.render(
    <App
      filmName = {`The Grand Budapest Hotel`}
      filmGenre = {`Drama`}
      releaseDate = {2014}
      listOtherFilms = {listOtherFilms}
    />,
    root
);
