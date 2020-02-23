import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

function AlbumList({ albums, onBtnClick, disableBtn }) {
  return (
    <React.Fragment>
      <SC.Container>
        {albums.map(album => {
          return (
            <SC.AlbumItem key={album.id}>
              <SC.AlbumWrapper to={`/albums/${album.id}`}>
                <div className="image-wrapper">
                  <img
                    src={`https://via.placeholder.com/300/${album.thumbnailSlug}`}
                    alt={album.title}
                    className="image"
                  />
                </div>
                <div className="title">{`${album.title} (${album.count})`}</div>
              </SC.AlbumWrapper>
            </SC.AlbumItem>
          );
        })}
      </SC.Container>
      {!disableBtn && <SC.Footer>
        <Button className="btn" onClick={onBtnClick}>More</Button>
      </SC.Footer>}
    </React.Fragment>
  );
}

const SC = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -15px;
  `,
  AlbumItem: styled.div`
    width: 20%;
    padding: 0 15px;
    margin-bottom: 15px;

    @media screen and (max-width: 991px) {
      width: 25%;
    }
    @media screen and (max-width: 767px) {
      width: calc(100% / 3);
    }
    @media screen and (max-width: 499px) {
      width: 50%;
    }
  `,
  AlbumWrapper: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    text-decoration: none;
    color: #1c1e21;

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      overflow: hidden;

      .image {
        transition: all .3s ease-in-out;
      }
    }

    .title {
      margin-top: 10px;
      padding: 0 10px;
      text-align: center;
    }

    &:hover {
      .image-wrapper .image {
        transform: scale(1.1);
      }
    }
  `,
  Footer: styled.div`
    display: flex;
    justify-content: center;
    margin: 15px 0;
  `
};

export default AlbumList;
