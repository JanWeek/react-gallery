import React, { useState, useEffect, useContext } from 'react';
import { IsLoadingContext } from '../context';
import { Link } from 'react-router-dom';
import AlbumList from '../components/AlbumList';
import handlers from '../utility/handlers';
import helpers from '../utility/helpers';
import styled from 'styled-components';

function Author({ match }) {
  const [offset, setOffset] = useState(0);
  const [userInfo, setUserInfo] = useState(false);
  const [albumsCount, setAlbumsCount] = useState(false);
  const [albums, setAlbums] = useState([]);
  const { setIsLoading } = useContext(IsLoadingContext);

  async function loadUserData() {
    let userId = match.params.id;
    let userData = await handlers.getUserById(userId);
    setUserInfo(userData);
  }

  async function loadAlbums() {
    let userId = userInfo.id || match.params.id
    setIsLoading(true);
    if (albumsCount && offset >= albumsCount) {
      return false;
    }
    let { albums, count } = await handlers.getAlbumsData(10, offset, userId);
    setAlbumsCount(count);
    setAlbums(prevAlbums => [...prevAlbums, ...albums]);
    setOffset(offset + 10);
    setIsLoading(false);
  }

  useEffect(() => {
    loadUserData();
    loadAlbums();
  }, []);

  return (
    <div>
      <h1>{userInfo.username}</h1>
      {userInfo && (
        <SC.UserBlock>
          <SC.Logo
            className="logo"
            bgcolor={helpers.getStringColor(userInfo.name)}
          >
            <span>{helpers.getInitials(userInfo.name)}</span>
          </SC.Logo>
          <SC.Info>
            <div className="fullname">{userInfo.name}</div>
            <div className="email">
              <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
            </div>
            <div className="website">
              <a href={`//${userInfo.website}`}>{userInfo.website}</a>
            </div>
          </SC.Info>
          <SC.BackLink to="/authors">Back to authors</SC.BackLink>
        </SC.UserBlock>
      )}
      {userInfo && albums && (
        <React.Fragment>
          <h2>{`${helpers.getDeclination(userInfo.name)} albums`}</h2>
          <AlbumList
            albums={albums}
            onBtnClick={loadAlbums}
            disableBtn={offset >= albumsCount}
          />
        </React.Fragment>
      )}
    </div>
  );
}

const SC = {
  UserBlock: styled.div`
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding: 15px;
    border-radius: 5px;

    .logo {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        font-size: 36px;
      }

      @media screen and (max-width: 767px) {
        width: 70px;
        height: 70px;

        > span {
          font-size: 24px;
        }
      }
    }
  `,
  Logo: styled.div`
    background: ${props => props.bgcolor};
  `,
  Info: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
      margin-bottom: 5px;
    }
  `,
  BackLink: styled(Link)`
    color: #aaa;
    font-size: 14px;
    margin: 0 0 0 auto;
    align-self: end;
  `
};

export default Author;
