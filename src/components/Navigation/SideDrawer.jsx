import React from 'react';
import Auxi from "../../hoc/Auxi";
import Backdrop from "../UI/Backdrop";
import Logo from "../UI/Logo";
import NavItems from "./NavItems/NavItems";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachedClasses = props.open
                        ? [classes.SideDrawer, classes.Open]
                        : [classes.SideDrawer, classes.Closed];
  return (
    <Auxi>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={attachedClasses.join(' ')}>
        <Backdrop />
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Auxi>
  );
};

export default sideDrawer;