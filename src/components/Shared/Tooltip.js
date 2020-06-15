import React from 'react';
import Proptypes from 'prop-types';

import Hover from './Hover';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
  },
};

const Tooltip = ({ children, text }) => {
  return (
    <Hover>
      {(hovering) => (
        <div style={styles.container}>
          {hovering && <div style={styles.tooltip}>{text}</div>}
          {children}
        </div>
      )}
    </Hover>
  );
};
Tooltip.propType = {
  text: Proptypes.string.isRequired,
};
//THIS IS THE HIGERORDER COMPONENT
export default Tooltip;
