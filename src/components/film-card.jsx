import React from "react";
import propTypes from 'prop-types';

const FilmCard = ({filmName, picture, handleCardTitleClick, handleCardMouseEnter}) => {
  return <>
    <article onMouseEnter={handleCardMouseEnter} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={picture} alt={filmName} width="280" height="175" />
      </div>
      <h3 onClick={handleCardTitleClick} className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{filmName}</a>
      </h3>
    </article>
  </>;
};

FilmCard.propTypes = {
  filmName: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  handleCardTitleClick: propTypes.func,
  handleCardMouseEnter: propTypes.func,
};

export default FilmCard;
