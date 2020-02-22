import React, { useState, useEffect } from 'react';
import handlers from '../utility/handlers';
import AlbumList from '../components/AlbumList';

function Albums() {
  const [offset, setOffset] = useState(0);
  const [albumsCount, setAlbumsCount] = useState(false);
  const [albums, setAlbums] = useState([]);

  async function loadAlbums() {
    if (albumsCount && offset >= albumsCount) {
      return false;
    }
    let { albums, count } = await handlers.getAlbumsData(20, offset);
    setAlbumsCount(count);
    setAlbums(prevAlbums => [...prevAlbums, ...albums]);
    setOffset(offset + 20);
  }

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div>
      <h1>Albums</h1>
      <AlbumList albums={albums} onBtnClick={loadAlbums} disableBtn={offset >= albumsCount} />
    </div>
  );
}

export default Albums;
