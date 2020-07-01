import React, {PureComponent} from "react";
import propTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.playerRef = React.createRef();

    this.timer = null;

    this.state = {
      play: false,
      pause: false,
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    this.playerRef.current.src = ``;
    this.playerRef.current.poster = ``;
  }

  componentDidUpdate() {
    const {focusOnCard} = this.props;

    if (focusOnCard === true) {
      this.timer = setTimeout(() => this.playerRef.current.play(), 1000);
    } else {
      clearTimeout(this.timer);
      this.timer = null;
      this.playerRef.current.load();
    }
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        src={src}
        poster={poster}
        ref={this.playerRef}

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
