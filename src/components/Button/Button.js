import React from "react";
import "./Button.css";
import styled from "styled-components";
const Button = styled.button`
  & {
    width: 150px;
    height: 50px;
    border: 1px solid salmon;
    padding: 10px 20px;
    margin-top: 60px;
    margin-left: 20px;
  }
  &:hover {
    background-color: ${(props) => (props.stateError.name ? "red" : "#ccc")};
    color: white;
  }
`;
// function Button(props) {
//   return (
//     <div>
//            <button type={props.type} className="button" onClick={props.onClick}>
//              {props.children}
//          </button>
//     </div>
//   )
// }

export default Button;
