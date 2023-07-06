import React from "react";
import styles from "./CheckoutSummary.module.css";
import MainBurger from "../../Burger/MainBurger/MainBurger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ basket, continueHandler, cancelHandler }) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <MainBurger basket={basket} />
      </div>
      <Button btnType="danger" clicked={cancelHandler}>
        CANCEL
      </Button>
      <Button btnType="success" clicked={continueHandler}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
