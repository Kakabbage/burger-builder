import React from 'react';
import Logo from '../UI/Logo';
import DrawerToggle from "./DrawerToggle";
import NavItems from './NavItems/NavItems';
import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.toggleSideDrawer} />
    
    <div className={classes.Logo}>
      <Logo />
    </div>
    
    <nav className={classes.DesktopOnly}><NavItems /></nav>
  </header>
);

export default toolbar;