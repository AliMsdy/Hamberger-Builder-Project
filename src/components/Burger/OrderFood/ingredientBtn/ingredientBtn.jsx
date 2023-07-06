import React from "react";
import styles from "./ingredientBtn.module.css";

function IngredientBtn({
  type,
  MoreBtn: MoreBtnHandler,
  LessBtn: LessBtnHandler,
  amount,
}) {
  return (
    <div className={styles.container}>
      <p>{type}</p>
      <div>
        <button disabled={amount > 0 ? false : true} onClick={LessBtnHandler}>
          Less
        </button>
        <button onClick={MoreBtnHandler}>More</button>
      </div>
    </div>
  );
}

export default IngredientBtn;
