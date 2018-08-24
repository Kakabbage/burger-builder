import React, {Component} from 'react';
import axios from "../../axios-orders";
import BuildControls from '../../components/Burger/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Order/OrderSummary';
import Modal from '../../components/UI/Modal';
import Spinner from "../../components/UI/Spinner";
import Auxi from '../../hoc/Auxi';
import handleError from '../../hoc/handleError';


const INITIAL_PRICE = 3.20;
const INGREDIENT_PRICE = {
  salad : 0.5,
  cheese: 0.4,
  bacon : 0.7,
  meat  : 1.4,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {},
    price      : INITIAL_PRICE,
    purchasable: false,
    purchasing : false,
    loading    : false,
    error      : false,
  };
  
  addIngredient = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngredients[type] + 1;
    
    // const priceDiff = INGREDIENT_PRICE[type];
    const newPrice = this.state.price + INGREDIENT_PRICE[type];
    
    this.setState({ingredients: updatedIngredients, price: newPrice});
    this.updatePurchaseState(newPrice);
  };
  
  removeIngredient = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    if (updatedIngredients[type] <= 0) return;
    updatedIngredients[type] = updatedIngredients[type] - 1;
    
    const newPrice = this.state.price - INGREDIENT_PRICE[type];
    
    this.setState({ingredients: updatedIngredients, price: newPrice});
    this.updatePurchaseState(newPrice);
  };
  
  handlePurchase = () => {
    this.setState({purchasing: true});
  };
  
  cancelPurchasing = () => {
    this.setState({purchasing: false});
  };
  
  continuePurchasing = () => {
    // this.setState({loading : true});
    // const order = {
    //   ingredients : this.state.ingredients,
    //   price       : this.state.price,
    //   customer    : {
    //     name           : 'Max',
    //     addr           : {
    //       street  : "Test Street",
    //       zipCode : "12345",
    //       country : "Germany",
    //     },
    //     email          : 'test@test.com',
    //     deliveryMethod : 'fastest',
    //   },
    // };
    // axios.post('/orders.json', order)
    //      .then(response => {
    //        this.setState({loading : false, purchasing : false});
    //      })
    //      .catch(error => {
    //        this.setState({loading : false, purchasing : false});
    //      })
    // ;
    this.props.history.push(
      {
        pathname: '/checkout',
      });
  };
  
  componentDidMount () {
    axios.get('/ingredients.json')
         .then(res => {
           this.setState({ingredients: res.data});
         })
         .then(this.updatePurchaseState(this.state.price))
         .catch(error => {this.setState({error: error});})
    ;
  }
  
  updatePurchaseState (price) {
    this.setState({purchasable: (price.toFixed(2) > 1.8)});
    // Not purchasable if no ingredient
  }
  
  render () {
    const disabledIngredients = {...this.state.ingredients};
    for (let key in disabledIngredients) {
      disabledIngredients[key] = (disabledIngredients[key] <= 0);
    }
    
    let burger = this.state.error
                 ? <p>Can't retrieve ingredients!</p>
                 : <Spinner />;
    let orderSummary = null;
    if (Object.keys(this.state.ingredients).length > 0) {
      burger = (
        <Auxi>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            purchasable={this.state.purchasable}
            price={this.state.price}
            ingredientAdded={this.addIngredient}
            ingredientRemoved={this.removeIngredient}
            disabled={disabledIngredients}
            ordered={this.handlePurchase} />
        </Auxi>);
      
      orderSummary = (<OrderSummary
          ingredients={this.state.ingredients}
          cancelPurchasing={this.cancelPurchasing}
          continuePurchasing={this.continuePurchasing}
          price={this.state.price}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    
    return (
      <Auxi>
        <Modal
          show={this.state.purchasing}
          closeModal={this.cancelPurchasing}>
          {orderSummary}
        </Modal>
        
        {burger}
      </Auxi>
    );
  }
}

export default handleError(BurgerBuilder, axios);