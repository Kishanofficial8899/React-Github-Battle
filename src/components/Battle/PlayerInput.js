import React, { Component } from 'react';
import { context } from '../../context/theme';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';

const inputContainer = {
  hidden: {
    y: '100vh',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 120,
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' },
    },
  },
};



export default class PlayerInput extends Component {
  state = {
    username: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    const { username } = this.state;
    // console.log(theme);
    return (
      <context.Consumer>
        {({ darkMode }) => (
          <motion.form
            variants={inputContainer}
            animate='visible'
            initial='hidden'
            className='column player'
            onSubmit={this.handleSubmit}>
            <label htmlFor='username' className='player-label'>
              {this.props.label}
            </label>

            <div className='row player-inputs'>
              <input
                type='text'
                id='username'
                onChange={this.handleChange}
                className={`input-${darkMode ? 'dark' : 'light'}`}
                placeholder='Github UserName'
                autoComplete='off'
                value={username}
              />
              <motion.button
                className={`btn ${darkMode === true ? 'light-btn' : 'dark-btn'
                  }`}
                type='submit'
                disabled={!this.state.username}>
                submit
              </motion.button>
            </div>
          </motion.form>
        )}
      </context.Consumer>
    );
  }
}
//Propstypes
PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
