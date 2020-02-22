import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';

function PhotoList({ photos, onBtnClick, disableBtn }) {
  return (
    <React.Fragment>
      <SC.Container>
        {photos.map(photo => {
          return (
            <SC.PhotoItem key={photo.id}>
              <SC.PhotoWrapper href={photo.url}>
                <img
                  src={`https://via.placeholder.com/250/${photo.slug}`}
                  alt={photo.title}
                />
              </SC.PhotoWrapper>
            </SC.PhotoItem>
          );
        })}
      </SC.Container>
      <SC.Footer>
        {!disableBtn && (
          <Button className="btn" onClick={() => onBtnClick()}>
            More
          </Button>
        )}
      </SC.Footer>
    </React.Fragment>
  );
}

const SC = {
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  PhotoItem: styled.div`
    width: calc(100% / 6);
  `,
  PhotoWrapper: styled.a`
    display: block;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  Footer: styled.a`
    display: flex;
    justify-content: center;
    margin: 15px 0;
  `
};

export default PhotoList;
