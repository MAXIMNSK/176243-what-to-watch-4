import React from "react";

import Main from "../../src/components/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {name, genre, releaseDate} = props.filmInfo;

  return <Main filmName = {name} filmGenre = {genre} filmRelease = {releaseDate}/>;
};

export default App;
