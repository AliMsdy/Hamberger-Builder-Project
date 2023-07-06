import React, { Component } from "react";
import styled from "styled-components";

let Div = styled.div`
  cursor: pointer;
  width: 40px;
  padding: 8px 0px;
  display: block;
  margin: 0 10px;
  div {
    height: 3px;
    margin: 5px 0;
    background-color: #fff;
    border-radius: 10px;
  }
  @media only screen and (min-width: 499px) {
    display: none;
  }
`;

class BurgerMenu extends Component {
  render() {
    return (
      <>
        <Div onClick={this.props.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
      </>
    );
  }
}

export default BurgerMenu;
