import React from "react";
import styled from "styled-components";

let Div = styled.div`
  background-color: #fff;
  border-radius: 40%;
  height: 11px;
  width: 39px;
  position: absolute;
  box-shadow: inset -2px -3px #c9c9c9;
  top: ${(props) => props.styles.top};
  left: ${(props) => props.styles.left};
  transform: rotate(${(props) => props.styles.rotate});
`;

function Seeds({ styles }) {
  return <Div styles={styles}></Div>;
}

export default Seeds;
