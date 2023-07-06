import React from "react";
import styled from "styled-components";
import Seeds from "./Seeds/Seeds";

let Div = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 50% 50% 0 0;
  background: linear-gradient(#bc581e, #e27b36);
  box-shadow: inset -15px 0 #c15711;
  padding: 50px 20px;
  position: relative;
`;

function BurgerTop() {
  return (
    <>
      <Div>
        <Seeds styles={{ top: "46%", left: "12%", rotate: "27deg" }} />
        <Seeds styles={{ top: "59%", left: "29%", rotate: "-26deg" }} />
        <Seeds styles={{ top: "24%", left: "43%", rotate: "220deg" }} />
        <Seeds styles={{ top: "56%", left: "59%", rotate: "8deg" }} />
        <Seeds styles={{ top: "40%", left: "77%", rotate: "107deg" }} />
      </Div>
    </>
  );
}

export default BurgerTop;
