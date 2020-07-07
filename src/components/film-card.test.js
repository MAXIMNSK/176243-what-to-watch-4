import React from "react";
import renderer from "react-test-renderer";

import FilmCard from "./film-card.jsx";

const mock = {
  name: `Форрест Гамп`,
  poster: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
  prewiev: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: `f1`
};

describe(`Film card component total check`, () => {
  it(`Check should render film card component`, () => {
    const currentComponent = renderer.create(
        <FilmCard
          name={mock.name}
          poster={mock.poster}
          prewiev={mock.prewiev}
        />
    ).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
