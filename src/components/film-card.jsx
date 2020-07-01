import React, {PureComponent} from "react";
import propTypes from 'prop-types';

import VideoPlayer from "./video-player.jsx";

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    };
  }

  render() {
    const {name, poster, preview, onmouseclick, onmouseenter} = this.props;

    return (
      <>
        <article
          onMouseEnter={() => {
            onmouseenter;
            this.setState({playing: true});
          }}
          onMouseLeave={() => {
            this.setState({playing: false});
          }}
          className="small-movie-card catalog__movies-card"
        >
          <div className="small-movie-card__image">
            <VideoPlayer src={preview} poster={poster} playStatus={this.state.playing} />
          </div>

          <h3 onClick={onmouseclick} className="small-movie-card__title">
            <a className="small-movie-card__link" href="movie-page.html">{name}</a>
          </h3>
        </article>
      </>
    );
  }
}

FilmCard.propTypes = {
  name: propTypes.string,
  poster: propTypes.string,
  preview: propTypes.string,
  onmouseclick: propTypes.func,
  onmouseenter: propTypes.func,
};

export default FilmCard;
