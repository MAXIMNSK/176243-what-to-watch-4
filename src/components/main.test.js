import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import Main from "./main.jsx";
import listAllFilms from "../mocks/film.js";

const mockStore = configureStore([]);

const mock = {
  name: `Joker`,
  genre: `Crime`,
  release: 2019,
  list: [
    {
      name: `Форрест Гамп`,
      picture: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
      id: `f1`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Comedy`,
    },
    {
      name: `Начало`,
      picture: `https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
      id: `f2`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Comedy, Thriller`,
    },
    {
      name: `Звёздные войны. Эпизод 5: Империя наносит ответный удар`,
      picture: `https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg`,
      id: `f3`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Romance`,
    },
    {
      name: `Властелин колец: Две крепости`,
      picture: `https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,684,1000_AL_.jpg`,
      id: `f4`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Comedy, Dramas`,
    },
  ]
};

describe(`Main component total check`, () => {
  it(`Check should render main component`, () => {
    const store = mockStore({
      type: `All genres`,
      payload: listAllFilms,
    });

    const currentComponent = renderer.create(
        <Provider store={store}>
          <Main
            filmName={mock.name}
            filmGenre={mock.genre}
            releaseDate={mock.release}
            listAllFilms={mock.list}
          />
        </Provider>
    ).toJSON();

    expect(currentComponent).toMatchSnapshot();
  });
});
