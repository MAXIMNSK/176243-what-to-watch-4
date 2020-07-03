import React, {PureComponent} from "react";
import propTypes from 'prop-types';

import VideoPlayer from "./video-player.jsx";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      onFocus: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  render() {
    const {name, poster, preview, handleMouseClick, handleMouseEnter} = this.props;

    return (
      <>
        <article
          className="small-movie-card catalog__movies-card"
          onMouseEnter={handleMouseEnter}
          onMouseOver={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="small-movie-card__image">
            <VideoPlayer src={preview} poster={poster} focusOnCard={this.state.onFocus} />
          </div>

          <h3 onClick={handleMouseClick} className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">{name}</a>
          </h3>
        </article>
      </>
    );
  }

  handleMouseEnter() {
    this.setState({
      onFocus: true
    });
  }

  handleMouseLeave() {
    this.setState({
      onFocus: false
    });
  }
}

FilmCard.propTypes = {
  name: propTypes.string,
  poster: propTypes.string,
  preview: propTypes.string,
  handleMouseClick: propTypes.func,
  handleMouseEnter: propTypes.func,
};

export default FilmCard;
