import React from "react";
import propTypes from 'prop-types';

import Main from "../../src/components/main.jsx";

const App = ({filmName, filmGenre, releaseDate}) => {
  return <Main
    filmName={filmName}
    filmGenre={filmGenre}
    releaseDate={releaseDate}
  />;
};

App.propTypes = {
  filmName: propTypes.string.isRequired,
  filmGenre: propTypes.string.isRequired,
  releaseDate: propTypes.number.isRequired,
};

export default App;
