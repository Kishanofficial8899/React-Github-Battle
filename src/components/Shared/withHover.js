import React from 'react';

/* THIS IS THE FOR THE UNDERSTAING UNDERSTAING PURPOSE */
/* NOT USER IN ANY COMPONENT */
/* HIGERORDER COMPONET */

const withHover = (Component, propName = 'hovering') => {
  return class WithHover extends React.Component {
    state = {
      hovering: false,
    };
    onMouseOver = () => this.setState({ hovering: true });
    mouseOut = () => this.setState({ hovering: false });

    render() {
      const props = {
        [propName]: this.state.hovering,
        ...this.props,
      };
      return (
        <div onMouseOver={this.onMouseOver} onMouseOut={this.mouseOut}>
          <Component {...props} />
        </div>
      );
    }
  };
};

export default withHover;
