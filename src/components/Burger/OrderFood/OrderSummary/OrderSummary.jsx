import React, { useContext } from "react";
import { AppContext } from "../../../Burger/Burger";
import Button from "../../../UI/Button/Button";

function OrderSummary() {
  let { basket, calculateTotalPrice, closeModal, checkoutHandler } =
    useContext(AppContext);

  return (
    <>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>
        {basket.map(({ name, amount }) => {
          return (
            <li key={name}>
              {name}: <span>{amount}</span>
            </li>
          );
        })}
      </ul>

      <p>
        Total Price: <span>{calculateTotalPrice()} $</span>
      </p>
      <p>Continue to Checkout ?</p>
      <div style={{ marginTop: "20px" }}>
        <Button clicked={closeModal} btnType="danger">
          CANCEL
        </Button>
        <Button clicked={checkoutHandler} btnType="success">
          CONTINUE
        </Button>
      </div>
    </>
  );
}

export default OrderSummary;
