import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad : 1,
      bacon : 1,
      cheese: 1,
      meat  : 1,
    },
  };
  
  cancelCheckout = () => {
    this.props.history.goBack();
  };
  
  continueCheckout = () => {
    this.props.history.push('/checkout/info');
  };
  
  render () {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelCheckout={this.cancelCheckout}
          continueCheckout={this.continueCheckout}
        />
      </div>
    );
  }
}

export default Checkout;