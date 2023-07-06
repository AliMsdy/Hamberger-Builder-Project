import React from "react";
import styled from "styled-components";

let Div = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Overlay({ clickHandler }) {
  return <Div onClick={clickHandler}></Div>;
}

export default Overlay;
