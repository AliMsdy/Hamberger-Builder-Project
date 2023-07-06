import React, { Component, createContext } from "react";
import MainBurger from "./MainBurger/MainBurger";
import OrderFood from "./OrderFood/OrderFood";
import axios from "../hoc/AxiosInstance/axiosInstance";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../UI/loadingSpinner/loadingSpinner";

// ingredients transferred to the firebase database
// and we receive them from there
// let ingredients = [
//   {
//     name: "Salad",
//     amount: 0,
//     price: 0.5,
//   },
//   {
//     name: "Bacon",
//     amount: 0,
//     price: 0.7,
//   },
//   {
//     name: "Cheese",
//     amount: 0,
//     price: 0.4,
//   },
//   {
//     name: "Meat",
//     amount: 0,
//     price: 1.3,
//   },
// ];

export const AppContext = createContext();

class Burger extends Component {
  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((response) => {
        this.setState({
          basket: [...response.data],
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
  }

  state = {
    shouldModalShown: false,
    basket: null,
    isLoading: false,
    error: false,
  };

  openModalHandler = () => {
    // this function checks if something
    // exist in the basket then opens the modal
    for (let ingredient of this.state.basket) {
      if (ingredient.amount > 0) {
        this.setState({
          shouldModalShown: true,
        });
        break;
      }
    }
  };

  closeModalHandler = () => {
    this.setState({
      shouldModalShown: false,
    });
  };

  increaseHandler = (index) => {
    let newBasket = [...this.state.basket];

    newBasket[index].amount++;
    this.setState({
      basket: newBasket,
    });
  };

  decreaseHandler = (index) => {
    let newBasket = [...this.state.basket];
    if (newBasket[index].amount > 0) {
      newBasket[index].amount--;
      this.setState({
        basket: newBasket,
      });
    }
  };

  calculateTotalPrice = () => {
    let totalPrice = 4; // this is because of price of the bread
    this.state.basket.forEach(({ amount, price }) => {
      totalPrice += amount * price;
    });
    return totalPrice.toFixed(2);
  };
  sendOrderRequest = () => {
    let params = [];
    this.state.basket.forEach(({ name, amount }) => {
      params.push(`${encodeURIComponent(name)}=${encodeURIComponent(amount)}`); // i.e => Salad=2
    });
    params.push(`totalPrice=${this.calculateTotalPrice()}`);
    // console.log(params);
    this.props.history.push({
      pathname: "/checkout",
      search: `?${params.join("&")}`,
    });
  };

  render() {
    let { shouldModalShown, basket, isLoading, error } = this.state;
    let renderOutput = error ? (
      <p style={{ textAlign: "center" }}>ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );
    if (basket) {
      renderOutput = (
        <AppContext.Provider
          value={{
            basket,
            calculateTotalPrice: this.calculateTotalPrice,
            closeModal: this.closeModalHandler,
            checkoutHandler: this.sendOrderRequest,
          }}
        >
          <MainBurger basket={basket} />
          <OrderFood
            decreaseHandler={this.decreaseHandler}
            increaseHandler={this.increaseHandler}
            orderHandler={this.openModalHandler}
            calculateTotalPrice={this.calculateTotalPrice}
            basket={basket}
            isLoading={isLoading}
            shouldModalShown={shouldModalShown}
            closeModalHandler={this.closeModalHandler}
          />
        </AppContext.Provider>
      );
    }
    return <>{renderOutput}</>;
  }
}

export default withErrorHandler(Burger, axios);
