import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { context } from '../../context/theme';
import { motion } from 'framer-motion';

//CARD MOTIION ANITION

const carcVarients = {
  hover: {
    scale: 1.1,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
};

const cardContainer = {
  hidden: {
    x: '100vh',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 130,
    },
  },
};

const headerAnimation = {
  hover: {
    rotate: 360,
    // originX: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
};

export const Card = ({ avatar, name, subheader, href, header, children }) => {
  const { darkMode } = useContext(context);

  return (
    <motion.div
      variants={cardContainer}
      animate='visible'
      initial='hidden'
      className={`card bg-${darkMode ? 'dark' : 'light'}`}>
      <motion.div
        variants={headerAnimation}
        whileHover='hover'
        className='header-lg center-text'>
        {header}
      </motion.div>
      <motion.img
        variants={carcVarients}
        whileHover='hover'
        src={avatar}
        alt={`Avatar for ${name}`}
        className='avatar'
      />
      {subheader && <h4 className='center-text'>{subheader}</h4>}
      <h2 className='center-text'>
        <a className='link' href={href}>
          {name}
        </a>
      </h2>
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
