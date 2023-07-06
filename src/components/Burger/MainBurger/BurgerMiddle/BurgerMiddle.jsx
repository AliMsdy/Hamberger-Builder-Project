import React from "react";
// import { AppContext } from "../../Burger";
import styled from "styled-components";
import Salad from "./ingredients/Salad";
import Bacon from "./ingredients/Bacon";
import Cheese from "./ingredients/Cheese";
import Meat from "./ingredients/Meat";

let Div = styled.div`
  width: 100%;
  margin: 5px auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

let ingredientsArray = [<Salad />, <Bacon />, <Cheese />, <Meat />];

function BurgerMiddle({ basket }) {
  function createIngredients() {
    let ingredients = [];
    basket &&
      basket.forEach(({ amount }, index) => {
        for (let i = 0; i < amount; i++) {
          // let componentName = name[0].toUpperCase() + name.slice(1);
          ingredients.push(ingredientsArray[index]);
        }
      });

    let output = ingredients.length
      ? ingredients
      : "Please start adding ingredients!";

    return output;
  }

  return <Div>{createIngredients()}</Div>;
}

export default BurgerMiddle;
