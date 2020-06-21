import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const clickCount = 1;
const possibleOtherFilms = [`The Last Airbender`, `Jaws`, `Public Enemies`, `Dark`];
const mainComponentMock = {
  name: `Joker`,
  genre: `Crime`,
  release: 2019,
  list: possibleOtherFilms,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  it(`E2E test for main component`, () => {
    const {name, genre, release, list} = mainComponentMock;
    const onClickHeadline = jest.fn();

    const mainComponent = shallow(
        <Main
          filmName = {name}
          filmGenre = {genre}
          releaseDate = {release}
          filmList = {list}
          onClick = {onClickHeadline}
        />
    );

    const headlinesOfCards = mainComponent.find(`h3.small-movie-card__title`);
    headlinesOfCards.forEach((element) => element.simulate(`click`));

    expect(onClickHeadline).toHaveBeenCalledTimes(clickCount);
  });
});
