import React from "react";

import Main from "../../src/components/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({filmName, filmGenre, releaseDate}) => {
  return <Main
    filmName = {filmName}
    filmGenre = {filmGenre}
    releaseDate = {releaseDate}
  />;
};

export default App;
