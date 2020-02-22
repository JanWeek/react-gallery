import React from 'react';
import styled from 'styled-components';

function Button(props) {
  return <SC.Button {...props}>{props.children}</SC.Button>;
}

const SC = {
  Button: styled.button`
    padding: 10px 20px;
    background-color: #2b7de0;
    border-color: #2b7de0;
    border: 1px solid transparent;
    color: #fff;
    border-radius: 3px;
    outline: none;
    margin: 0;
    cursor: pointer;

    &:focus,
    &:active {
      background-color: #468de4;
      border-color: #468de4;
    }
    &:active {
      box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
  `
}

export default Button;