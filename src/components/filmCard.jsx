import React from "react";
import propTypes from 'prop-types';

const FilmCard = ({filmName, onClickHeadlineCard}) => {
  return <>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 onClick = {onClickHeadlineCard} className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{filmName}</a>
      </h3>
    </article>
  </>;
};

FilmCard.propTypes = {
  filmName: propTypes.string.isRequired,
  onClickHeadlineCard: propTypes.func,
};

export default FilmCard;
