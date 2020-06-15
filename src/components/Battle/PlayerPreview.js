import React, { useContext } from 'react';
import PropsTypes from 'prop-types';
import { context } from '../../context/theme';
import { FaTimesCircle } from 'react-icons/fa';

const PlayerPreview = ({ username, label, onReset }) => {
  const { darkMode } = useContext(context);
  return (
    <div className='column player'>
      <h3 className='player-label'>{label}</h3>
      <div className={`row bg-${darkMode ? 'dark' : 'light'}`}>
        <div className='player-info'>
            <img
              className='avatar-small'
              src={`https://github.com/${username}.png?size=200`}
              alt={`Avatar for ${username}`}
            />
            <a href={`https://github.com/${username}`} className='link'>
              {username}
            </a>
        </div>
        <button className='btn-clear flex-center' onClick={onReset}>
          <FaTimesCircle color='rgb(194, 57, 42)' size={26} />
        </button>
      </div>
    </div>
  );
};

PlayerPreview.propTypes = {
  username: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired,
  onReset: PropsTypes.func.isRequired,
};

export default PlayerPreview;
