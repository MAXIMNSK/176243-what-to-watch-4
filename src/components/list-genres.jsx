import React, {PureComponent} from "react";
import {connect} from "react-redux";
import propTypes from 'prop-types';

import getUniqueGenres from "../getUniqueGenres";

class ListGenres extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {listAllFilms} = this.props;
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
      <li className={this._getCorrectClassName(genre)} onClick={this.props.changeGenre} key={this._getKey(genre, index)}>
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  }

  _getCorrectClassName(currentGenre) {
    const {type} = this.props;

    return type === currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`;
  }

  _getKey(genre, index) {
    return genre.slice(0, 1) + index;
  }
}

ListGenres.propTypes = {
  type: propTypes.string.isRequired,
  changeGenre: propTypes.func.isRequired,
  listAllFilms: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    preview: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
  })),
};

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => ({
  changeGenre(evt) {
    evt.preventDefault();
    dispatch({type: evt.target.textContent});
  }
});

export {ListGenres};
export default connect(mapStateToProps, mapDispatchToProps)(ListGenres);
