import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Auxi from '../../hoc/Auxi';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
  salad : 0.5,
  cheese: 0.4,
  bacon : 0.7,
  meat  : 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad : 0,
      bacon : 0,
      cheese: 0,
      meat  : 0,
    },
    price      : 1,
  };
  
  addIngredient = (type) => {
    
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngredients[type] + 1;
    
    // const priceDiff = INGREDIENT_PRICE[type];
    const newPrice = this.state.price + INGREDIENT_PRICE[type];
    
    this.setState({ingredients: updatedIngredients, price: newPrice});
  };
  
  removeIngredient = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    if (updatedIngredients[type] <= 0) return;
    
    updatedIngredients[type] = updatedIngredients[type] - 1;
    
    const newPrice = this.state.price - INGREDIENT_PRICE[type];
    
    this.setState({ingredients: updatedIngredients, price: newPrice});
  };
  
  render () {
    const disabledInfo = {...this.state.ingredients};
    
    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }
    
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.price}
          ingredientAdded={this.addIngredient}
          ingredientRemoved={this.removeIngredient}
          disabled={disabledInfo}
        />
      </Auxi>
    );
  }
}

export default BurgerBuilder;