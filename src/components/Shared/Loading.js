import React, { Component } from 'react';
import PropTpes from 'prop-types';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default class Loading extends Component {
  state = {
    content: this.props.text,
  };
  componentDidMount() {
    const { speed, text } = this.props;

    //https://stackoverflow.com/questions/38786973/how-to-set-component-default-props-on-react-component
    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }));
    }, speed);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }
  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}

Loading.propTypes = {
  text: PropTpes.string.isRequired,
  speed: PropTpes.number.isRequired,
};
Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};
