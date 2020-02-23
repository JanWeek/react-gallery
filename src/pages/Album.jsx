import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IsLoadingContext, CurrentPhotoContext } from '../context';
import PhotoList from '../components/PhotoList';
import handlers from '../utility/handlers';

function Album({ match }) {
  const [albumInfo, setAlbumInfo] = useState({});
  const [photos, setPhotos] = useState([]);
  const [offset, setOffset] = useState(0);
  const { setIsLoading } = useContext(IsLoadingContext);
  const { setCurrentPhoto, setCurrentGalery } = useContext(CurrentPhotoContext);

  async function loadAlbumData() {
    setIsLoading(true);
    let albumId = match.params.id;
    let albumInfo = await handlers.getAlbumInfoById(albumId);
    setAlbumInfo(albumInfo);
    setIsLoading(false);
  }

  async function loadPhotos() {
    setIsLoading(true);
    if (albumInfo.count && offset >= albumInfo.count) {
      return false;
    }
    let albumId = albumInfo.id || match.params.id;
    let photos = await handlers.getPhotos(18, offset, albumId);
    setPhotos(prevPhotos => [...prevPhotos, ...photos]);
    setOffset(offset + 18);
    setIsLoading(false);
  }

  function openModalPhoto(photo) {
    setCurrentGalery(photos);
    setCurrentPhoto(photo);
  }

  useEffect(() => {
    loadAlbumData();
    loadPhotos();
  }, []);

  return (
    <div>
      <SC.Header>
        <h1>{albumInfo.title}</h1>
        <SC.BackLink to="/albums">Back to albums</SC.BackLink>
      </SC.Header>
      <PhotoList
        photos={photos}
        onBtnClick={loadPhotos}
        disableBtn={offset >= albumInfo.count}
        openModal={openModalPhoto}
      />
    </div>
  );
}

const SC = {
  Header: styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    h1 {
      @media screen and (max-width: 499px) {
        display: block;
        width: 100%;
      }
    }
  `,
  BackLink: styled(Link)`
    color: #aaa;
    font-size: 14px;
    margin: 10px 0 10px auto;
    align-self: end;
  `
};

export default Album;
