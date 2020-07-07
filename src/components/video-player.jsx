import React, {PureComponent} from "react";
import propTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.player = React.createRef();

    this.timer = null;
    this.delay = 1000;

    this.state = {
      play: false,
      pause: false,
    };

    this._handlerTimeout = this._handlerTimeout.bind(this);
  }

  componentWillUnmount() {
    this.player.current.src = ``;
    this.player.current.poster = ``;
  }

  componentDidUpdate() {
    const {focusOnCard} = this.props;

    if (focusOnCard) {
      this.timer = setTimeout(this._handlerTimeout, this.delay);
    } else {
      clearTimeout(this.timer);
      this.timer = null;
      this.player.current.load();
    }
  }

  _handlerTimeout() {
    this.player.current.play();
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        src={src}
        poster={poster}
        ref={this.player}

        width="280"
        height="175"

        controls
        muted
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: propTypes.string,
  poster: propTypes.string,
  focusOnCard: propTypes.bool,
};


export default VideoPlayer;
