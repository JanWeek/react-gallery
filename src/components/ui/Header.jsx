import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../logo.svg';

const Header = () => (
  <SC.Header>
    <SC.Inner>
      <SC.Logo to="/">
        <img src={logo} alt="" />
      </SC.Logo>
      <SC.Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </SC.Navigation>
    </SC.Inner>
  </SC.Header>
);

const SC = {
  Header: styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    height: 3.75rem;
    width: 100%;
  `,
  Logo: styled(Link)`
    width: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Inner: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 100%;
    font-size: 18px;

    @media screen and (max-width: 499px) {
      font-size: 14px;
      padding: 0 0.5rem;
    }
  `,
  Navigation: styled.nav`
    padding: 0 10px;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      height: 100%;

      > li {
        height: 100%;
        display: flex;
        align-items: center;

        a {
          color: #1c1e21;
          font-weight: 500;
          padding: 0.25rem 1rem;
          text-decoration: none;

          @media screen and (max-width: 499px) {
            padding: 0.25rem 0.7rem;
          }
        }
      }
    }
  `
};

export default Header;
