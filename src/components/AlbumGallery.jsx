import React from 'react';
import styled from 'styled-components';

function AlbumGallery({ albums, onBtnClick, disableBtn }) {
  return (
    <React.Fragment>
      <SC.Container>
        {albums.map(album => {
          return (
            <SC.AlbumItem key={album.id}>
              <SC.AlbumWrapper href={`/albums/${album.id}`}>
                <div className="img">
                  <img
                    src={`https://via.placeholder.com/300/${album.thumbnailSlug}`}
                    alt=""
                  />
                </div>
                <div className="title">{`${album.title} (${album.count})`}</div>
              </SC.AlbumWrapper>
            </SC.AlbumItem>
          );
        })}
      </SC.Container>
      <SC.Footer>
        {!disableBtn && <button className="btn" onClick={() => onBtnClick()}>More</button>}
      </SC.Footer>
    </React.Fragment>
  );
}

const SC = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -20px;
  `,
  AlbumItem: styled.div`
    width: 20%;
    padding: 0 20px;
    margin-bottom: 20px;
  `,
  AlbumWrapper: styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    text-decoration: none;
    color: #1c1e21;

    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
    }

    .title {
      margin-top: 10px;
      padding: 0 10px;
      text-align: center;
    }
  `,
  Footer: styled.a`
    display: flex;
    justify-content: center;
    margin: 15px 0;

    .btn {
      padding: 10px 20px;
      background-color: #2b7de0;
      border-color: #2b7de0;
      border: 1px solid transparent;
      color: #fff;
      border-radius: 3px;
      outline: none;
      margin: 0;

      &:focus,
      &:active {
        background-color: #468de4;
        border-color: #468de4;
      }
      &:active {
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
      }
    }
  `
};

export default AlbumGallery;
