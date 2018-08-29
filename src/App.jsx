import React, {Component} from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout';
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from 'react-router-dom';
import Orders from "./containers/Orders/Orders";

class App extends Component {
  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({show : false});
  //   }, 5000);
  // }
  
  
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
  );
  }
  }
  
  export default App;
