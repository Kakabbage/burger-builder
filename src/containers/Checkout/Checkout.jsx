import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from "./ContactData";

class Checkout extends Component {
  state = {
    ingredients : null,
    price       : 0,
  };
  
  cancelCheckout = () => {
    this.props.history.goBack();
  };
  
  continueCheckout = () => {
    this.props.history.push('/checkout/contact-data');
  };
  
  componentWillMount () {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      }
      else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ingredients : ingredients, price : price});
  }
  
  render () {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelCheckout={this.cancelCheckout}
          continueCheckout={this.continueCheckout}
        />
        <Route path={this.props.match.path + '/contact-data'}
               render={(props) => (
                 <ContactData ingredients={this.state.ingredients}
                              price={this.state.price} {...props}/>)} />
      </div>
    );
  }
}

export default Checkout;