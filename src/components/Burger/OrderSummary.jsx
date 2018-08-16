import React from 'react';
import Auxi from '../../hoc/Auxi';
import Button from '../UI/Button';

const orderSummary = (props) => {
  const price = props.price.toFixed(2);
  const ingredientList = Object
    .keys(props.ingredients)
    .map(key => {
      return <li key={key}>
        <span style={{textTransform : 'capitalize'}}>{key}</span>
        : {props.ingredients[key]}
      </li>;
    });
  
  return (
    <Auxi>
      <h3>Your Order</h3>
      <p>Burger ingredients:</p>
      <ul>
        {ingredientList}
      </ul>
      
      <p><strong>Price: ${price}</strong></p>
      
      <Button
        clicked={props.cancelPurchasing}
        btnType={"Danger"}
      >CANCEL</Button>
      <Button
        clicked={props.continuePurchasing}
        btnType={"Success"}
        price={price}
      >CONTINUE</Button>
    </Auxi>
  );
};

export default orderSummary;
;
;
;