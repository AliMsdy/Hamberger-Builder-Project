import React from "react";
import styles from "./OrderFood.module.css";
import IngredientBtn from "./ingredientBtn/ingredientBtn";
import Modal from "../../Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Spinner from "../../UI/loadingSpinner/loadingSpinner";

function OrderFood({
  orderHandler,
  increaseHandler,
  decreaseHandler,
  calculateTotalPrice,
  basket,
  isLoading,
  shouldModalShown,
  closeModalHandler,
}) {
  let { container, selector } = styles;

  function OrderBtnCheckStyle() {
    // this function checks if something
    // exist in the basket and then apply styles based on that
    let isSomethingExistInBasket = false;
    for (let ingredient of basket) {
      if (ingredient.amount > 0) {
        isSomethingExistInBasket = true;
        break;
      }
    }
    return isSomethingExistInBasket;
  }

  return (
    <>
      <div className={container}>
        <h4>
          Current Price: <span>{calculateTotalPrice()} $</span>
        </h4>
        <div className={selector}>
          {basket.map(({ name, amount }, index) => {
            return (
              <IngredientBtn
                MoreBtn={() => increaseHandler(index)}
                LessBtn={() => decreaseHandler(index)}
                type={name}
                key={name}
                amount={amount}
              />
            );
          })}
        </div>
        <button disabled={!OrderBtnCheckStyle()} onClick={orderHandler}>
          ORDER NOW
        </button>
      </div>
      <Modal ModalStatus={shouldModalShown} closeModal={closeModalHandler}>
        {isLoading ? <Spinner /> : <OrderSummary />}
      </Modal>
    </>
  );
}
// export ;
export default OrderFood;
