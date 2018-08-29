import React, {Component} from 'react';
import Button from "../../components/UI/Button";
import classes from './ContactData.css';
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner";
import Input from "../../components/UI/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      customer      : {
        elementType  : 'input',
        elementConfig: {type: 'text', placeholder: 'Your name'},
        value        : '',
      },
      street        : {
        elementType  : 'input',
        elementConfig: {type: 'text', placeholder: 'Your street'},
        value        : '',
      },
      zipCode       : {
        elementType  : 'input',
        elementConfig: {type: 'text', placeholder: 'ZIP Code'},
        value        : '',
      },
      country       : {
        elementType  : 'input',
        elementConfig: {type: 'text', placeholder: 'Country'},
        value        : '',
      },
      email         : {
        elementType  : 'input',
        elementConfig: {type: 'email', placeholder: 'Your email'},
        value        : '',
      },
      deliveryMethod: {
        elementType  : 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'fast', displayValue: 'Fast'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ],
        },
      },
    },
    loading  : false,
  };
  
  // orderFormItem = (elementType, type, placeholder, value) => {
  //   return {
  //     elementType  : elementType,
  //     elementConfig: {type: type, placeholder: placeholder},
  //     value        : value,
  //   };
  // };
  
  submitOrder = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price      : +this.props.price,
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
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push(
        {
          key   : key,
          config: this.state.orderForm[key],
        },
      );
    }
    
    let form = (
      <form>
        {formElementArray.map(e => (
          <Input
            key={e.key}
            elementType={e.config.elementType}
            elementConfig={e.config.elementConfig}
            value={e.config.value}
          />
        ))}
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