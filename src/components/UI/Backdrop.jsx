import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
  props.show
  ? <div className={classes.Backdrop}
         onClick={props.clicked} />
  : null
);

// backdrop.propTypes =
//
//   backdrop.defaultProps =

export default backdrop;