import React, {PureComponent} from "react";
import propTypes from 'prop-types';
import {connect} from "react-redux";

import FilmCard from "./film-card.jsx";
import listAllFilms from "../mocks/film";

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
    const {payload} = this.props;
    let temp = null;

    if (payload !== undefined) {
      temp = payload;
    } else {
      temp = listAllFilms;
    }

    return temp.map((currentFilm) => this._getFilm(currentFilm));
  }

  _getFilm({name, picture, id, preview}) {
    return (
      <FilmCard
        name={name}
        poster={picture}
        preview={preview}
        key={id}

        onMouseClick={this._handleCardTitleClick}
        onMouseEnter={this._handleCardMouseEnter}
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
  payload: propTypes.undefined || propTypes.array,
  listAllFilms: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    preview: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
  })),
};

const mapStateToProps = ({type, payload}) => {
  return Object.assign({}, {type, payload});
};

export {ListFilms};
export default connect(mapStateToProps)(ListFilms);
