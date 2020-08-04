import React, {PureComponent} from "react";
import propTypes from 'prop-types';
import {connect} from "react-redux";

import FilmCard from "./film-card.jsx";
import listAllFilms from "../mocks/film";
import withFilmCard from "../hoc/withFilmCard";

class ListFilms extends PureComponent {
  constructor(props) {
    super(props);

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
    const WrappedFilmCard = withFilmCard(FilmCard);

    return (
      <WrappedFilmCard
        name={name}
        poster={picture}
        preview={preview}
        key={id}

        onTitleCardClick={this._handleCardTitleClick}
        onCardMouseEnter={this._handleCardMouseEnter}
      />
    );
  }

  _handleCardTitleClick(evt) {
    const {updateState} = this.props;
    evt.preventDefault();

    updateState(evt.target);
  }

  _handleCardMouseEnter(evt) {
    const {updateState} = this.props;
    updateState(evt.target);
  }
}

ListFilms.propTypes = {
  payload: propTypes.undefined || propTypes.array,

  updateState: propTypes.func,

  listAllFilms: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    preview: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
  })),
};

const mapStateToProps = ({type, payload}) => ({type, payload});

export {ListFilms};
export default connect(mapStateToProps)(ListFilms);
