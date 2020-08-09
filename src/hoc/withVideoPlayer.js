import React, {PureComponent} from "react";

const withVideoPlayer = (Component) => {
  return class ContainerComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        isPaused: true,
      };

      this._updateState = this._updateState.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}

          isPlaying={this.state.isPlaying}
          isPaused={this.state.isPaused}
          updateState={this._updateState}

          width="280"
          height="175"

          controls
          muted
        />
      );
    }

    _updateState(newState) {
      this.setState({
        isPlaying: newState.isPlaying,
        isPaused: newState.isPaused,
      });
    }
  };
};

export default withVideoPlayer;
