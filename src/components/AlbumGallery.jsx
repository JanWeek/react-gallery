import React from 'react';
import styled from 'styled-components';

function AlbumGallery({ albums }) {
  return (
    <SC.Container>
      {albums.map(album => {
        return (
          <SC.AlbumItem key={album.id}>
            <SC.AlbumWrapper>
              <span>{album.title}</span>
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
    margin: 0 -10px;
  `,
  AlbumItem: styled.div`
    width: 20%;
    padding: 0 10px;
    margin-bottom: 20px;
  `,
  AlbumWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    min-height: 200px;
    background: #ddd;

    span {
      text-align: center;
    }
  `
}

export default AlbumGallery;
