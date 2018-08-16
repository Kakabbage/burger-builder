import React from 'react';
import Auxi from '../../hoc/Auxi';
import Backdrop from './Backdrop';
import classes from './Modal.css';

const modal = (props) => {
  return (
    <Auxi>
      <Backdrop show={props.show} clicked={props.closeModal}/>
      <div className={classes.Modal}
           style={{
             transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
             opacity   : props.show ? '1' : '0',
        
           }}>
        {props.children}
      </div>
    </Auxi>
  );
};

// modal.propTypes =
//
//   modal.defaultProps =

export default modal;