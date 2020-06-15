import React from 'react';

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const LanguageNav = ({ selectedLanguage, onUpdateLanguage }) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  //TO GET ACTIVE COLOR OF LANGUAAGE
  let getActiveColor = (language) => {
    if (language === selectedLanguage) {
      return { color: 'rgb(187, 46, 31)', outline: 'none' };
    }
  };

  return (
    <ul className='flex-center'>
      {languages.map((language) => (
        <motion.li
          key={language}
          whileHover={{ scale: 1.1, originX: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}>
          <button
            onClick={() => onUpdateLanguage(language)}
            style={getActiveColor(language)}
            className='btn-clear nav-link'>
            {language}
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

//PROPTYPE
LanguageNav.prototype = {
  selectedLanguage: PropTypes.number.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default LanguageNav;
