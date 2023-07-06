import React from "react";
import styles from "./Order.module.css";

const Order = ({ orderDetail }) => {
  let ingredients = orderDetail["orderIngredients"].map(({ amount, name }) => {
    return (
      <li key={name}>
        {name} ({amount})
      </li>
    );
  });
  let totalPrice = orderDetail["totalPrice"];

  return (
    <div className={styles.Order}>
      <div>
        ingredients: &nbsp;
        <ul>{ingredients}</ul>
      </div>
      <p>
        Price: <strong>USD {totalPrice}</strong>
      </p>
    </div>
  );
};

export default Order;
