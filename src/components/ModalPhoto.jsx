import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function ModalPhoto({ photoIndex, gallery, setCurrentPhoto }) {
  return (
    <React.Fragment>
      {(typeof photoIndex === 'number' && photoIndex >= 0 && gallery) && (
        <SC.Modal onClick={e => {console.log("click!"); setCurrentPhoto(false);}}>
          <div className="header">
            <AiOutlineClose color="#aaa" size="30px" className="close-btn" />
          </div>
          <div className="container" onClick={e => {e.stopPropagation();}}>
            {photoIndex !== 0 && (<div className="prev-photo" onClick={() => prevPhoto()}>
              <AiOutlineLeft color="#aaa" size="60px" className="arrow" />
            </div>)}
            <div className="content">
              <img src={gallery[photoIndex].url} alt={gallery[photoIndex].title} />
            </div>
            {photoIndex !== gallery.length - 1 && (<div className="next-photo" onClick={() => nextPhoto()}>
              <AiOutlineRight color="#aaa" size="60px" className="arrow" />
            </div>)}
          </div>
          <div className="footer" onClick={(e) => e.stopPropagation()}>
            <div className="title">{gallery[photoIndex].title}</div>
            <div className="counter">{`${photoIndex + 1} / ${gallery.length}`}</div>
          </div>
        </SC.Modal>
      )}
    </React.Fragment>
  );

  function nextPhoto() {
    if (photoIndex < gallery.length - 1) {
      setCurrentPhoto(photoIndex + 1);
    }
  }

  function prevPhoto() {
    if (photoIndex > 0) {
      setCurrentPhoto(photoIndex - 1);
    }
  }
}

const SC = {
  Modal: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;

    .header {
      display: flex;
      justify-content: flex-end;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 5px;

      .close-btn {
        cursor: pointer;
      }
    }

    .container {
      max-width: 90vw;
      max-height: 90vh;
      z-index: 1010;
      position: relative;
      transition: all 0.5s ease-in-out;

      @media screen and (max-width: 767px) {
        padding: 0;
      }

      .prev-photo, .next-photo {
        position: absolute;
        top: 0;
        bottom: 0;
        max-width: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        transition: all 0.5s ease-in-out;
        cursor: pointer;

        @media screen and (max-width: 767px) {
          max-width: 40px;
        }
      }
      .prev-photo {
        left: -60px;
        justify-content: flex-start;

        @media screen and (max-width: 767px) {
          left: -40px;
        }
      }
      .next-photo {
        right: -60px;
        justify-content: flex-end;

        @media screen and (max-width: 767px) {
          right: -40px;
        }
      }

      .content {
        img {
          max-height: calc(100vh - 100px);
          max-width: calc(100vw - 120px);
          user-select: none;

          @media screen and (max-width: 767px) {
            max-width: calc(100vw - 80px);
          }
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      color: #eee;
      z-index: 1020;

      .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 5px;
        min-width: 50px;
      }
    }
  `,

  PhotoWrapper: styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

  `
}

export default ModalPhoto;
