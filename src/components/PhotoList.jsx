import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';

function PhotoList({ photos, onBtnClick, disableBtn, openModal }) {
  return (
    <React.Fragment>
      <SC.Container>
        {photos.map((photo, index) => {
          return (
            <SC.PhotoItem key={photo.id}>
              <SC.PhotoWrapper
                href={photo.url}
                onClick={e => {
                  e.preventDefault();
                  openModal(index);
                }}
              >
                <img
                  src={`https://via.placeholder.com/250/${photo.slug}`}
                  alt={photo.title}
                />
              </SC.PhotoWrapper>
            </SC.PhotoItem>
          );
        })}
      </SC.Container>
      {!disableBtn && (
        <SC.Footer>
          <Button className="btn" onClick={() => onBtnClick()}>
            More
          </Button>
        </SC.Footer>
      )}
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

    @media screen and (max-width: 1023px) {
      width: 25%;
    }
    @media screen and (max-width: 767px) {
      width: calc(100% / 3);
    }
    @media screen and (max-width: 499px) {
      width: calc(50%);
    }
  `,
  PhotoWrapper: styled.a`
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all .3s ease-in-out;
    }

    &:hover {
      img {
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

export default PhotoList;
