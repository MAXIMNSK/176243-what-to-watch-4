import React, {PureComponent} from "react";
import propTypes from 'prop-types';
import {connect} from "react-redux";

import getUniqueGenres from "../getUniqueGenres";
import listAllFilms from "../mocks/film";

class ListGenres extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOnGenreClick = this._handleOnGenreClick.bind(this);
  }

  render() {
    const uniqueGenres = getUniqueGenres(listAllFilms);

    return this._getListGenres(uniqueGenres);
  }

  _getListGenres(allGenres) {
    return (
      <ul className="catalog__genres-list">
        {allGenres.map((genre, index) => this._getGenre(genre, index))}
      </ul>
    );
  }

  _getGenre(genre, index) {
    return (
      <li
        className={this._getCorrectClassName(genre)}
        onClick={this._handleOnGenreClick}
        key={this._getKey(genre, index)}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  }

  _getCorrectClassName(currentGenre) {
    const {type} = this.props;
    const active = `catalog__genres-item catalog__genres-item--active`;
    const notActive = `catalog__genres-item`;

    return type === currentGenre ? active : notActive;
  }

  _handleOnGenreClick(evt) {
    const {updateState} = this.props;

    evt.preventDefault();
    this.props.changeGenre(evt);

    updateState(evt.target.textContent);
  }

  _getKey(genre, index) {
    return genre.slice(0, 1) + index;
  }
}

ListGenres.propTypes = {
  type: propTypes.string,

  changeGenre: propTypes.func,
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

const mapDispatchToProps = (dispatch) => ({
  changeGenre(evt) {
    dispatch({type: evt.target.textContent});
  }
});

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
