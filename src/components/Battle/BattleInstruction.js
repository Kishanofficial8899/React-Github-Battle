import React, { useContext } from 'react';
import { context } from '../../context/theme';
import { FaUserFriends, FaTrophy, FaFighterJet } from 'react-icons/fa';
import { motion } from 'framer-motion';

const inturctionCard = {
  hidden: {
    x: '-100vh',
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
    exit: {
      x: '-100vh',
      transition: { ease: 'easeInOut' },
    },
  },
};

const Instruction = () => {
  const { darkMode } = useContext(context);
  return (
    <motion.div
      variants={inturctionCard}
      animate='visible'
      initial='hidden'
      className='instruction-container'
      style={{ marginTop: '-1rem' }}>
      <h1 className='center-text header-lg'>Instruction</h1>
      <ol className='container-sm grid center-text battle-instructions'>
        <li>
          <h3 className='header-sm sm-text'>Enter Two Github Users</h3>
          <FaUserFriends
            className={`bg-${darkMode ? 'dark' : 'light'}`}
            color='rgb(255, 191, 116)'
            size={140}
          />
        </li>
        <li>
          <h3 className='header-sm'>Battle</h3>
          <FaFighterJet
            className={`bg-${darkMode ? 'dark' : 'light'}`}
            color='#727272'
            size={140}
          />
        </li>
        <li>
          <h3 className='header-sm'>See the Winnner</h3>
          <FaTrophy
            className={`bg-${darkMode ? 'dark' : 'light'}`}
            color='rgb(255, 215, 0)'
            size={140}
          />
        </li>
      </ol>
    </motion.div>
  );
};

export default Instruction;
