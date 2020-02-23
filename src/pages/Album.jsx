import React, { useState, useEffect, useContext } from 'react';
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
      <h1>{albumInfo.title}</h1>
      <PhotoList photos={photos} onBtnClick={loadPhotos} disableBtn={offset >= albumInfo.count} openModal={openModalPhoto} />
    </div>
  );

}

export default Album;
