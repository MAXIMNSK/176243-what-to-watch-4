import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmCard from "./film-card.jsx";

const mock = {
  name: `Форрест Гамп`,
  picture: `https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  id: `f1`
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Film card tests`, () => {
  it(`E2E test for film card component`, () => {
    const {name, picture, preview} = mock;
    const onCardMouseEnter = jest.fn();

    const filmCardComponent = shallow(
        <FilmCard
          filmName={name}
          picture={picture}
          preview={preview}
          onMouseEnter={onCardMouseEnter}
        />
    );

    const card = filmCardComponent.find(`article.small-movie-card`);
    card.simulate(`mouseenter`);
    expect(onCardMouseEnter).toBeTruthy();
  });
});
