import React, {Component} from 'react';
import SideDrawer from "../components/Navigation/SideDrawer";
import Toolbar from '../components/Navigation/Toolbar';
import Auxi from './Auxi';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    isSideDrawerVisible : false,
  };
  
  const;
  
  closeSideDrawer = () => {
    this.setState({isSideDrawerVisible : false});
  };
  
  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return {isSideDrawerVisible : !prevState.isSideDrawerVisible};
    });
  };
  
  render () {
    return (
      
      <Auxi>
        <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer closed={this.closeSideDrawer}
                    open={this.state.isSideDrawerVisible} />
        <main className={classes.Content}>
          {this.props.children}</main>
      </Auxi>
    )
      ;
  }
}


export default Layout;
