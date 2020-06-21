import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const possibleOtherFilms = [`The Last Airbender`, `Jaws`, `Public Enemies`, `Dark`];

const mainComponentMock = {
  name: `Joker`,
  genre: `Crime`,
  release: 2019,
  list: possibleOtherFilms,
};

describe(`Main component total check`, () => {
  it(`Check should render main component`, () => {
    const currentComponent = renderer.create(<Main
      filmName = {mainComponentMock.name}
      filmGenre = {mainComponentMock.genre}
      releaseDate = {mainComponentMock.release}
      filmList = {mainComponentMock.list}
    />).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
