import reducer from "./reducer";
import listAllFilms from "./mocks/film";
import getNewState from "./reducer";
import getFilmsCurrentGenre from "./getFilmsCurrentGenre";

describe(`Reducer checks`, () => {
  it(`Check loaded initialState to reducer`, () => {
    expect(reducer(undefined, {})).toEqual({
      type: `All genres`,
      payload: listAllFilms,
    });
  });

  it(`Check loaded Crime-genre to reducer`, () => {
    const state = {
      type: `All genres`,
      payload: listAllFilms,
    };

    const action = {
      type: `Crime`,
    };

    expect(reducer(state, action.type)).toEqual(getNewState(state, action.type));
  });

  it(`Check loaded Comedies-genre to reducer`, () => {
    const state = {
      type: `Sci-Fi`,
      payload: getFilmsCurrentGenre(listAllFilms, `Sci-Fi`),
    };

    const action = {
      type: `Comedies`,
    };

    expect(reducer(state, action.type)).toEqual(getNewState(state, action.type));
  });
});
