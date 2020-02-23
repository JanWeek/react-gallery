import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loader({ showLoader }) {
  return (
    <React.Fragment>
      {showLoader && <SC.Wrapper><SC.Loader /></SC.Wrapper>}
    </React.Fragment>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SC = {
  Wrapper: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(134, 134, 134, 0.336);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Loader: styled.div`
    border-radius: 50%;
    width: 10em;
    height: 10em;
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: ${rotate} 1.1s infinite linear;

    &:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
  `
};

export default Loader;
