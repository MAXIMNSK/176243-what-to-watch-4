import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

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
    const onClickHeadlineCard = jest.fn();
    const mainComponent = shallow(
        <Main
          filmName = {name}
          filmGenre = {genre}
          releaseDate = {release}
          filmList = {list}
          onClick = {onClickHeadlineCard}
        />
    );

    const headline = mainComponent.find(`h3.small-movie-card__title`);
    headline.forEach((currentElement) => currentElement.simulate(`click`));

    expect(onClickHeadlineCard).toHaveBeenCalledTimes(headline.length);
  });
});
