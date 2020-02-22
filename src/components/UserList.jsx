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
    margin: 0 -20px;
  `,
  UserItem: styled.div`
    width: 20%;
    padding: 0 20px;
    margin-bottom: 40px;
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
    }
    .fullname {
      margin-top: 5px;
      color: #aaa;
      font-size: 12px;
    }
  `,
  Logo: styled.div`
    background: ${props => props.bgcolor};
  `
};

export default UserList;