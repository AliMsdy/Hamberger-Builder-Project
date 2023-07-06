import React from "react";
import styled from "styled-components";
import BurgerTop from "./BurgerTop/BurgerTop";
import BurgerMiddle from "./BurgerMiddle/BurgerMiddle";
import BurgerBottom from "./BurgerBottom/BurgerBottom";

let Div = styled.div`
  margin: 50px auto;

  @media only screen and (min-width: 500px) {
    width: 450px;
  }
`;

function MainBurger({ basket }) {
  return (
    <>
      <Div>
        <BurgerTop />
        <BurgerMiddle basket={basket} />
        <BurgerBottom />
      </Div>
    </>
  );
}

export default MainBurger;
