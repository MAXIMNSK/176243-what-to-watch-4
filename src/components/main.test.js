import React from "react";
import renderer from "react-test-renderer";

import Main from "./main";

const mock = {
  name: `Joker`,
  genre: `Crime`,
  release: 2019,
  list: [
    {
      name: `Форрест Гамп`,
      picture: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
    },
    {
      name: `Начало`,
      picture: `https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
    },
    {
      name: `Звёздные войны. Эпизод 5: Империя наносит ответный удар`,
      picture: `https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg`,
    },
    {
      name: `Властелин колец: Две крепости`,
      picture: `https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,684,1000_AL_.jpg`,
    },
  ]
};

describe(`Main component total check`, () => {
  it(`Check should render main component`, () => {
    const currentComponent = renderer.create(
        <Main
          filmName = {mock.name}
          filmGenre = {mock.genre}
          releaseDate = {mock.release}
          filmList = {mock.list}
        />
    ).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
