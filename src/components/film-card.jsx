import React, {PureComponent} from "react";
import propTypes from 'prop-types';

import VideoPlayer from "./video-player.jsx";
import withVideoPlayer from "../hoc/withVideoPlayer";

const WrappedVideoPlayer = withVideoPlayer(VideoPlayer);

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      poster,
      preview,
      onTitleCardClick,
      onCardMouseEnter,
      focusOnCard,
      onCardMouseOver,
      onCardMouseLeave,
      playerProperties,
    } = this.props;

    return (
      <>
        <article
          className="small-movie-card catalog__movies-card"
          onMouseEnter={onCardMouseEnter}
          onMouseOver={onCardMouseOver}
          onMouseLeave={onCardMouseLeave}
        >
          <div className="small-movie-card__image">
            <WrappedVideoPlayer
              src={preview}
              poster={poster}
              focusOnCard={focusOnCard}
              playerProperties={playerProperties}
            />
          </div>

          <h3 onClick={onTitleCardClick} className="small-movie-card__title">
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

  focusOnCard: propTypes.bool,

  onTitleCardClick: propTypes.func,
  onCardMouseEnter: propTypes.func,
  onCardMouseOver: propTypes.func,
  onCardMouseLeave: propTypes.func,

  playerProperties: propTypes.shape({
    timer: propTypes.number || propTypes.func,
    delay: propTypes.number.isRequired,
  }),
};

export default FilmCard;
