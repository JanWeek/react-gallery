import React, { useState, useEffect } from 'react';
import Api from '../api';
import AlbumGallery from '../components/AlbumGallery';

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    Api.loadAlbums()
      .then(res => setAlbums(res))
      .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <AlbumGallery albums={albums} />
    </div>
  );
}

export default Albums;