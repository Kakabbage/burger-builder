import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BurgerBuildControls/BuildControls';
import Auxi from '../../hoc/Auxi';

const INITIAL_PRICE = 1.2;
const INGREDIENT_PRICE = {
  salad  : 0.5,
  cheese : 0.4,
  bacon  : 0.7,
  meat   : 1.4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients : {
      salad  : 0,
      bacon  : 0,
      cheese : 0,
      meat   : 0,
    },
    price       : INITIAL_PRICE,
    purchasable : false,
  };
  addIngredient = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngredients[type] + 1;
    
    // const priceDiff = INGREDIENT_PRICE[type];
    const newPrice = this.state.price + INGREDIENT_PRICE[type];
  
    this.setState({ingredients : updatedIngredients, price : newPrice});
    this.updatePurchaseState(newPrice);
  };
  removeIngredient = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    if (updatedIngredients[type] <= 0) return;
    updatedIngredients[type] = updatedIngredients[type] - 1;
    
    const newPrice = this.state.price - INGREDIENT_PRICE[type];
  
    this.setState({ingredients : updatedIngredients, price : newPrice});
    this.updatePurchaseState(newPrice);
  };
  
  updatePurchaseState (price) {
    this.setState({purchasable : (price.toFixed(2) > INITIAL_PRICE)});
    // Not purchasable if no ingredient
  }
  
  render () {
    const disabledInfo = {...this.state.ingredients};
    
    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }
    
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          purchasable={this.state.purchasable}
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