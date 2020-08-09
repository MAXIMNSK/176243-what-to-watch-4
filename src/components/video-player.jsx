import React, {PureComponent} from "react";
import propTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.player = React.createRef();

    this._handlerTimeout = this._handlerTimeout.bind(this);
  }

  componentWillUnmount() {
    this.player.current.src = ``;
    this.player.current.poster = ``;
  }

  componentDidUpdate() {
    const {focusOnCard, playerProperties, updateState} = this.props;
    let {timer, delay} = playerProperties;

    if (focusOnCard) {
      timer = setTimeout(this._handlerTimeout, delay);

      updateState({
        isPlaying: true,
        isPaused: false,
      });
    } else {
      clearTimeout(timer);
      timer = null;
      this.player.current.load();

      updateState({
        isPlaying: false,
        isPaused: true,
      });
    }
  }

  _handlerTimeout() {
    this.player.current.play();
  }

  render() {
    const {src, poster, width, height, controls, muted} = this.props;

    return (
      <video
        src={src}
        poster={poster}
        ref={this.player}

        width={width}
        height={height}

        controls={controls}
        muted={muted}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: propTypes.string,
  poster: propTypes.string,

  width: propTypes.string,
  height: propTypes.string,
  controls: propTypes.bool,
  muted: propTypes.bool,

  isPlaying: propTypes.bool,
  isPaused: propTypes.bool,
  focusOnCard: propTypes.bool,
  updateState: propTypes.func,

  playerProperties: propTypes.shape({
    timer: propTypes.number || propTypes.func,
    delay: propTypes.number.isRequired,
  }),
};


export default VideoPlayer;
