import React from "react";
import propTypes from 'prop-types';

import Main from "../../src/components/main.jsx";

const App = ({filmName, filmGenre, releaseDate, listOtherFilms}) => {
  return <Main
    filmName={filmName}
    filmGenre={filmGenre}
    releaseDate={releaseDate}
    listOtherFilms={listOtherFilms}
  />;
};

App.propTypes = {
  filmName: propTypes.string.isRequired,
  filmGenre: propTypes.string.isRequired,
  releaseDate: propTypes.number.isRequired,
  listOtherFilms: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    preview: propTypes.string.isRequired,
  })),
};

export default App;
