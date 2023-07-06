import React, { Component } from "react";
import Order from "./Order/Order";
import axios from "../hoc/AxiosInstance/axiosInstance";
import Spinner from "../UI/loadingSpinner/loadingSpinner";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: null,
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    axios
      .get("/orders.json")
      .then((response) => {
        // console.log(response.data);
        let ordersArray = Object.entries(response.data); // convert objects to array of objects
        this.setState({
          orders: ordersArray,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    let orders;
    if (this.state.orders) {
      orders = this.state.orders.map(([id, orderDetail]) => {
        return <Order key={id} orderDetail={orderDetail} />;
      });
    } else {
      orders = (
        <p style={{ textAlign: "center" }}>orders can't be loaded ...!</p>
      );
    }
    if (this.state.isLoading) orders = <Spinner />;
    return <>{orders}</>;
  }
}

export default withErrorHandler(Orders, axios);
