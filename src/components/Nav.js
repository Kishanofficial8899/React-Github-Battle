import React, { useContext } from 'react';

import { context } from '../context/theme';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const activeStyle = {
  color: 'rgb(187, 46, 31)',
};

const navLinkAnimation = {
  hover: {
    scale: 1.1,
    originX: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const Nav = () => {
  const { darkMode, toggle } = useContext(context);

  return (
    <nav className='row space-between'>
      <ul className='row nav'>
        <motion.li variants={navLinkAnimation} whileHover='hover'>
          <NavLink to='/' exact activeStyle={activeStyle} className='nav-link'>
            Popular
          </NavLink>
        </motion.li>
        <motion.li variants={navLinkAnimation} whileHover='hover'>
          <NavLink to='/battle' activeStyle={activeStyle} className='nav-link'>
            Battle
          </NavLink>
        </motion.li>
      </ul>

      <motion.button
        variants={navLinkAnimation}
        whileHover='hover'
        style={{ fontSize: 30, outline: 'none' }}
        className='btn-clear'
        onClick={() => toggle()}>
        {darkMode ? '🌙' : '🌞'}
      </motion.button>
    </nav>
  );
};

export default Nav;
