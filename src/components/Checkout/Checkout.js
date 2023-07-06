import React, { Component } from "react";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from "react-router-dom";

class Checkout extends Component {
  componentWillMount() {
    let params = new URLSearchParams(this.props.location.search);
    let ingredients = [];
    let price = 0;
    for (let [name, amount] of params.entries()) {
      // console.log(name, amount);
      if (name === "totalPrice") {
        price = +amount;
      } else {
        ingredients.push({ name, amount: +amount });
      }
    }
    this.setState({ ingredients, price });
  }

  state = {
    ingredients: null,
    price: 0,
  };

  continueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  cancelHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          cancelHandler={this.cancelHandler}
          continueHandler={this.continueHandler}
          basket={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
