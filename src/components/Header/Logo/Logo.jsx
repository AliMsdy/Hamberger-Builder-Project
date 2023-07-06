import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo.png";

let Div = styled.div`
  width: 60px;
  padding: 5px 5px;
  background-color: white;
  border-radius: 7px;
  display: ${(props) => (props.shouldShown ? "block" : "none")};
  img {
    width: 100%;
  }
  @media only screen and (max-width: 499px) {
    display: block;
  }
`;

function Logo(props) {
  return (
    <>
      <Div shouldShown={props.shouldShown}>
        <img src={logo} alt="logo" />
      </Div>
    </>
  );
}

export default Logo;
