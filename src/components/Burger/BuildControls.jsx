import React from 'react';
import BuildControl from './BuildControl';
import classes from './BuildControls.css';

const controls = [
  {label : 'Salad', type : 'salad'},
  {label : 'Bacon', type : 'bacon'},
  {label : 'Cheese', type : 'cheese'},
  {label : 'Meat', type : 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
  
    {controls.map(ingredient => (
      <BuildControl
        label={ingredient.label}
        key={ingredient.label}
        added={() => props.ingredientAdded(ingredient.type)}
        removed={() => props.ingredientRemoved(ingredient.type)}
        disabled={props.disabled[ingredient.type]}
      />))}
  
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >ORDER NOW
    </button>
  </div>
);

export default buildControls;