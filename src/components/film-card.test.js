import React from "react";
import renderer from "react-test-renderer";

import FilmCard from "./film-card.jsx";

const mock = {
  name: `Форрест Гамп`,
  picture: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
  id: `f1`
};

describe(`Film card component total check`, () => {
  it(`Check should render film card component`, () => {
    const currentComponent = renderer.create(
        <FilmCard
          filmName={mock.name}
          picture={mock.picture}
        />
    ).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
