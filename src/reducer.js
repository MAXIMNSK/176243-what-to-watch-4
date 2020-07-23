import listAllFilms from "./mocks/film";
import getFilmsCurrentGenre from "./getFilmsCurrentGenre";

export const initialState = {
  type: `All genres`,
  payload: listAllFilms,
};

const actionTypes = {
  ALL_GENRES: `All genres`,
  COMEDIES: `Comedies`,
  CRIME: `Crime`,
  DOCUMENTARY: `Documentary`,
  DRAMAS: `Dramas`,
  HORROR: `Horror`,
  KIDS_AND_FAMILY: `Kids & Family`,
  ROMANCE: `Romance`,
  SCI_FI: `Sci-Fi`,
  THRILLERS: `Thrillers`,
};

export const getNewState = (state, currentGenre = actionTypes.ALL_GENRES) => {
  if (currentGenre === actionTypes.ALL_GENRES) {
    return Object.assign({}, state, initialState);
  } else {
    return Object.assign({}, state, {type: currentGenre, payload: getFilmsCurrentGenre(listAllFilms, currentGenre)});
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_GENRES:
      return getNewState(state);

    case actionTypes.COMEDIES:
      return getNewState(state, action.type);

    case actionTypes.CRIME:
      return getNewState(state, action.type);

    case actionTypes.DOCUMENTARY:
      return getNewState(state, action.type);

    case actionTypes.DRAMAS:
      return getNewState(state, action.type);

    case actionTypes.HORROR:
      return getNewState(state, action.type);

    case actionTypes.KIDS_AND_FAMILY:
      return getNewState(state, action.type);

    case actionTypes.ROMANCE:
      return getNewState(state, action.type);

    case actionTypes.SCI_FI:
      return getNewState(state, action.type);

    case actionTypes.THRILLERS:
      return getNewState(state, action.type);

    default:
      return state;
  }
};

export default reducer;
