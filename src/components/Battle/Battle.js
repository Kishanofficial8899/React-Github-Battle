import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BattleInstruction from './BattleInstruction';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

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

//Battle Component
export default class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };
  handleSubmit = (id, player) => {
    this.setState({
      [id]: player,
    });
  };
  handleReset = (id) => {
    console.log(id);
    this.setState({
      [id]: null,
    });
  };

  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <>
        <BattleInstruction />
        <div className='players-container'>
          <motion.h1
            variants={inputContainer}
            animate='visible'
            initial='hidden'
            className='center-text header-lg'>
            Players
          </motion.h1>
          <div className='row space-around'>
            {playerOne === null ? (
              <PlayerInput
                label='Player One'
                onSubmit={(player) => this.handleSubmit('playerOne', player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label='player One'
                onReset={() => this.handleReset('playerOne')}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                label='Player Two'
                onSubmit={(player) => this.handleSubmit('playerTwo', player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label='Player Two'
                onReset={() => this.handleReset('playerTwo')}
              />
            )}
          </div>
        </div>

        {playerOne && playerTwo && (
          <Link
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
            className='btn dark-btn btn-space'>
            Battle
          </Link>
        )}
      </>
    );
  }
}
