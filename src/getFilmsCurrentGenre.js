function getFilmsCurrentGenre(listFilms, currentGenre) {
  const listActualFilms = listFilms.filter((film, index, array) => checkFilm(film, index, array, currentGenre));
  return listActualFilms;
}

function checkFilm(film, index, array, currentGenre) {
  const notFound = -1;

  if (film.genre.indexOf(currentGenre) !== notFound) {
    return film;
  } else {
    return false;
  }
}

export default getFilmsCurrentGenre;
