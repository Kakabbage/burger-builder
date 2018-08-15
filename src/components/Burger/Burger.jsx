import React from 'react';
import classes from './Burger.css';
import Ingredient from "./Ingredient";
// import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

const burger = (props) => {
  
  let builtIngredients =
        Object.keys(props.ingredients) // ['salad', 'bacon', 'cheese', 'meat']
              .map(key => {
                return [...Array(props.ingredients[key])]
                  .map((e, i) => <Ingredient type={key} key={key + i} />);
              })
              // <Ingredient type='bacon' key='bacon1'>
              .reduce((arr, el) => [...arr, ...el], []);
  
  if (builtIngredients.length === 0) {
    builtIngredients = <p>Please start adding ingredients!</p>;
  }
  
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {builtIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;