import React from 'react';
import styled from 'styled-components';

function AlbumGallery({ albums }) {
  return (
    <SC.Container>
      {albums.map(album => {
        return (
          <SC.AlbumItem key={album.id}>
            <SC.AlbumWrapper href={`/albums/${album.id}`}>
              <div className="img">
                <img src={`https://via.placeholder.com/300/${album.thumbnailSlug}`} alt="" />
              </div>
              <div className="title">{`${album.title} (${album.count})`}</div>
            </SC.AlbumWrapper>
          </SC.AlbumItem>
        );
      })}
    </SC.Container>
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
  `
}

export default AlbumGallery;
