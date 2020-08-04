import React, {PureComponent} from "react";

const withFilmCard = (Component) => {
  return class ContainerComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        onFocus: false,
        play: false,
        pause: false,
      };

      this.playerProperties = {
        timer: null,
        delay: 1000,
      };

      this._handleCardMouseOver = this._handleCardMouseOver.bind(this);
      this._handleMouseLeaveCard = this._handleMouseLeaveCard.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          focusOnCard={this.state.onFocus}

          playerProperties={this.playerProperties}

          onCardMouseOver={this._handleCardMouseOver}
          onCardMouseLeave={this._handleMouseLeaveCard}
        />
      );
    }

    _handleCardMouseOver() {
      this.setState({
        onFocus: true,
      });
    }

    _handleMouseLeaveCard() {
      this.setState({
        onFocus: false,
      });
    }
  };
};

export default withFilmCard;
