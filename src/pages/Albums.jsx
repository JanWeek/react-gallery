import React, { useState, useEffect } from 'react';
import handlers from '../handlers';
import AlbumGallery from '../components/AlbumGallery';

function Albums() {
  async function fetchAlbums() {
    let albums = await handlers.getAlbumsData(10, 0);
    console.log(albums)
    setAlbums(albums);
  }
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <AlbumGallery albums={albums} />
    </div>
  );
}

export default Albums;