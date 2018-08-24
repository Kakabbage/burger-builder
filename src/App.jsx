import React, {Component} from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout';
import Checkout from "./containers/Checkout/Checkout";
import {Route} from 'react-router-dom'

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
          <Route exact path="/" component={BurgerBuilder}/>
          <Route path="/checkout" component={Checkout}/>
        </Layout>
      </div>
    );
  }
}

export default App;
