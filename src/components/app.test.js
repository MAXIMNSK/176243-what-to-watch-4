import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const possibleOtherFilms = [`The Last Airbender`, `Jaws`, `Public Enemies`, `Dark`];
const appComponentMock = {
  name: `Joker`,
  genre: `Crime`,
  release: 2019,
  list: possibleOtherFilms,
};

describe(`App component total check`, () => {
  it(`Check should render app component`, () => {
    const currentComponent = renderer.create(<App
      filmName = {appComponentMock.name}
      filmGenre = {appComponentMock.genre}
      releaseDate = {appComponentMock.release}
      filmList = {appComponentMock.list}
    />).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
