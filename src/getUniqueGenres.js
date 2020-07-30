function getUniqueGenres(listFilms) {
  const allGenres = getAllGenres(listFilms);
  allGenres.unshift(`All genres`);
  return allGenres;
}

function getAllGenres(listFilms) {
  const stringAllGenres = listFilms.reduce((accumulator, currentFilm) => accumulator + `, ` + currentFilm.genre, ``);
  const arrayAllGenres = stringAllGenres.split(`, `);
  const filteredGenres = arrayAllGenres.filter((element, index, array) => checkGenres(element, index, array));
  return filteredGenres;
}

function checkGenres(element, index, array) {
  if (element === ``) {
    return false;
  }

  return array.indexOf(element) === index;
}

export default getUniqueGenres;
