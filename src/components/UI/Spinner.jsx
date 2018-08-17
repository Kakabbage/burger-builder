import React from 'react';
import classes from './Spinner.css';

const spinner = () => (
  <div className={classes.Spinner} align="center">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    Loading...
  </div>
);
export default spinner;