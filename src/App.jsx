import React, { Component } from "react";
import Burger from "./components/Burger/Burger";
import Checkout from "./components/Checkout/Checkout";
import Layout from "./components/Layout/Layout.jsx";
import Orders from "./components/Orders/Orders";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={Burger} />
          </Switch>
        </Layout>
      </>
    );
  }
}

export default App;
