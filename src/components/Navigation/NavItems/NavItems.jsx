import React from 'react';
import NavItem from './NavItem';
import classes from './NavItems.css';

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
  
  </ul>
);


// navItems.propTypes =
//
//   navItems.defaultProps =

export default navItems;