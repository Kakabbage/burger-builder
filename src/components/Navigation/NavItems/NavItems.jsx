import React from 'react';
import NavItem from './NavItem';
import classes from './NavItems.css';

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>Burger Builder</NavItem>
    <NavItem link="/">Checkout</NavItem>

  </ul>
);


// navItems.propTypes =
//
//   navItems.defaultProps =

export default navItems;