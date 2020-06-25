import React from "react";
import propTypes from 'prop-types';

import Main from "../../src/components/main.jsx";

const App = ({filmName, filmGenre, releaseDate, filmList}) => {
  return <Main
    filmName = {filmName}
    filmGenre = {filmGenre}
    releaseDate = {releaseDate}
    filmList = {filmList}
  />;
};

App.propTypes = {
  filmName: propTypes.string.isRequired,
  filmGenre: propTypes.string.isRequired,
  releaseDate: propTypes.number.isRequired,
  filmList: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
  })),
};

export default App;
