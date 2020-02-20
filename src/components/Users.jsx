import React from 'react';
import styled from 'styled-components';

function Users({ users }) {
  return (
    <SC.Container>
      {users.map(user => {
        return (
          <SC.UserItem>
            <SC.UserWrapper>
              <SC.Logo className="logo" bgcolor={getColorFromName(user.name)}>
                <span>{getInitials(user.name)}</span>
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
  UserWrapper: styled.div`
    background: #fff;
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

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

function getInitials(fullname) {
  let names = fullname.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length >= 2) {
    initials += names[1].substring(0, 1).toUpperCase();
  }

  return initials;
}

function getColorFromName(name) {
  let hash = 0;

  if (name.length === 0)
    return hash;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }

  let color = '#';
  for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 255;
      color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
}

export default Users;