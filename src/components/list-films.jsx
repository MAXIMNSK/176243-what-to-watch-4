import React, {PureComponent} from "react";
import propTypes from 'prop-types';

import FilmCard from "./film-card.jsx";

class ListFilms extends PureComponent {
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

    return listOtherFilms.map((currentFilm) => this._getFilm(currentFilm));
  }

  _getFilm({name, picture, id, preview}) {
    return (
      <FilmCard
        name={name}
        poster={picture}
        preview={preview}
        key={id}

        onmouseclick={this._handleCardTitleClick}
        onmouseenter={this._handleCardMouseEnter}
      />
    );
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
    id: propTypes.string.isRequired,
    preview: propTypes.string.isRequired,
  })),
};

export default ListFilms;
