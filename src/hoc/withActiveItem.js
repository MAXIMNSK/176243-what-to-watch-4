import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class ContainerComponent extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentElement: null,
      };

      this._updateState = this._updateState.bind(this);
    }

    render() {
      return (
        <Component updateState={this._updateState} />
      );
    }

    _updateState(activeElement) {
      this.setState({
        currentElement: activeElement,
      });
    }
  }

  return <ContainerComponent />;
};

export default withActiveItem;
