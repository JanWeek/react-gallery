import React, { useState, useEffect } from 'react';
import handlers from '../handlers';

function Album( { match }) {
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  async function loadAlbumData() {
    let albumId = match.params.id;
    console.log(albumId);
    let album = await handlers.getAlbumById(albumId);
    console.log(album);
  }

  useEffect(() => {
    loadAlbumData();
  }, [])

  return (
    <div>
      <h1>{}</h1>
    </div>
  );

}

export default Album;
