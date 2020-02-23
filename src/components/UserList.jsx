import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import helpers from '../utility/helpers';

function UserList({ users }) {
  return (
    <SC.Container>
      {users.map(user => {
        return (
          <SC.UserItem key={user.id}>
            <SC.UserWrapper to={`/authors/${user.id}`}>
              <SC.Logo className="logo" bgcolor={helpers.getStringColor(user.name)}>
                <span>{helpers.getInitials(user.name)}</span>
              </SC.Logo>
              <div className="username">{user.username}</div>
              <div className="fullname">{user.name}</div>
            </SC.UserWrapper>
          </SC.UserItem>
        );
      })}
    </SC.Container>
  );
}

const SC = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  `,
  UserItem: styled.div`
    width: 20%;
    padding: 0 15px;
    margin-bottom: 30px;

    @media screen and (max-width: 992px) {
      width: 25%;
    }
    @media screen and (max-width: 767px) {
      width: calc(100% / 3);
    }
    @media screen and (max-width: 600px) {
      width: 50%;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  `,
  UserWrapper: styled(Link)`
    background: #fff;
    color: inherit;
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: all .2s ease-in-out;

    &:hover {
      box-shadow: 0px 5px 25px 0px rgba(18, 25, 38, 0.1);
    }

    .logo {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .username {
      margin-top: 10px;
      text-align: center;
    }
    .fullname {
      margin-top: 5px;
      color: #aaa;
      font-size: 12px;
      text-align: center;
    }
  `,
  Logo: styled.div`
    background: ${props => props.bgcolor};
  `
};

export default UserList;