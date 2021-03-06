import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from "./main.jsx";

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
    },
    {
      name: `Начало`,
      picture: `https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg`,
      id: `f2`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Звёздные войны. Эпизод 5: Империя наносит ответный удар`,
      picture: `https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg`,
      id: `f3`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    {
      name: `Властелин колец: Две крепости`,
      picture: `https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,684,1000_AL_.jpg`,
      id: `f4`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
  ]
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  it(`E2E test for main component`, () => {
    const {name, genre, release, list} = mock;
    const onClickHeadlineCard = jest.fn();

    const mainComponent = shallow(
        <Main
          filmName={name}
          filmGenre={genre}
          releaseDate={release}
          filmList={list}
          onClick={onClickHeadlineCard}
        />
    );

    const headline = mainComponent.find(`h3.small-movie-card__title`);
    headline.forEach((currentElement) => currentElement.simulate(`click`));

    expect(onClickHeadlineCard).toHaveBeenCalledTimes(headline.length);
  });
});
