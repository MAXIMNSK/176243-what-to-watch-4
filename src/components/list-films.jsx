import React from "react";
import propTypes from 'prop-types';

import FilmCard from "./film-card.jsx";

const getRandomNumber = () => Math.floor(Math.random() * 1e6);

class ListFilms extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilmCard: null,
    };

    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
  }

  render() {
    const {listOtherFilms} = this.props;

    return listOtherFilms.map((film) => (
      <FilmCard
        filmName = {film.name}
        picture = {film.picture}

        handleCardTitleClick = {this._handleCardTitleClick}
        handleCardMouseEnter = {this._handleCardMouseEnter}

        key = {getRandomNumber()}
      />
    ));
  }

  _handleCardTitleClick(evt) {
    evt.preventDefault();

    this.setState({
      currentFilmCard: evt.target,
    });
  }

  _handleCardMouseEnter(evt) {
    this.setState({
      currentFilmCard: evt.target,
    });
  }
}

ListFilms.propTypes = {
  listOtherFilms: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
  })),
};

export default ListFilms;
