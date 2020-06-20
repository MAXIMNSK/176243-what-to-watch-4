import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./filmCard";

const filmCardComponentMock = {
  name: `Joker`,
};

describe(`Film card component total check`, () => {
  it(`Check should render film card component`, () => {
    const currentComponent = renderer.create(<FilmCard
      filmName = {filmCardComponentMock.name}
    />).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
