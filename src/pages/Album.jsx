import React, { useState, useEffect } from 'react';
import PhotoList from '../components/PhotoList';
import handlers from '../utility/handlers';

function Album({ match }) {
  const [albumInfo, setAlbumInfo] = useState({});
  const [photos, setPhotos] = useState([]);
  const [offset, setOffset] = useState(0);

  async function loadAlbumData() {
    let albumId = match.params.id;
    let albumInfo = await handlers.getAlbumInfoById(albumId);
    setAlbumInfo(albumInfo);
  }

  async function loadPhotos() {
    if (albumInfo.count && offset >= albumInfo.count) {
      return false;
    }
    let albumId = albumInfo.id;
    let photos = await handlers.getPhotos(18, offset, albumId);
    setPhotos(prevPhotos => [...prevPhotos, ...photos]);
    setOffset(offset + 18);
  }

  useEffect(() => {
    loadAlbumData();
    loadPhotos();
  }, [])

  return (
    <div>
      <h1>{albumInfo.title}</h1>
      <PhotoList photos={photos} onBtnClick={loadPhotos} disableBtn={offset >= albumInfo.count}/>
    </div>
  );

}

export default Album;
