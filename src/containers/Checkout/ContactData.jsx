import React, {Component} from 'react';
import Button from "../../components/UI/Button";
import classes from './ContactData.css';
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";

class ContactData extends Component {
  state = {
    name   : '',
    email  : '',
    address: {
      street    : '',
      postalCode: '',
    },
    loading: false,
  };
  
  submitOrder = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price      : +this.props.price,
      customer   : {
        name          : 'Max',
        addr          : {
          street : "Test Street",
          zipCode: "12345",
          country: "Germany",
        },
        email         : 'test@test.com',
        deliveryMethod: 'fastest',
      },
    };
    axios.post('/orders.json', order)
         .then(response => {
           this.setState({loading: false, purchasing: false});
           this.props.history.push('/');
         })
         .catch(error => {
           this.setState({loading: false, purchasing: false});
         })
    ;
  };
  
  render () {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name"
               placeholder="Your name" />
        <input className={classes.Input} type="email" name="email"
               placeholder="Your email" />
        <input className={classes.Input} type="text" name="street"
               placeholder="Street" />
        <input className={classes.Input} type="text" name="postal"
               placeholder="Postal code" />
        <Button btnType="Success" clicked={this.submitOrder}>ORDER</Button>
      </form>
    
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;