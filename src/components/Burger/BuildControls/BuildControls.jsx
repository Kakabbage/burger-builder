import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
    
    {controls.map(ingred => (
      <BuildControl
        label={ingred.label}
        key={ingred.label}
        added={() => props.ingredientAdded(ingred.type)}
        removed={() => props.ingredientRemoved(ingred.type)}
        disabled={props.disabled[ingred.type]}
      />))}
  </div>
);

export default buildControls;