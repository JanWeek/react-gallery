import React, { useState, useEffect, useContext } from 'react';
import { IsLoadingContext } from '../context';
import handlers from '../utility/handlers';
import AlbumList from '../components/AlbumList';

function Albums() {
  const [offset, setOffset] = useState(0);
  const [albumsCount, setAlbumsCount] = useState(false);
  const [albums, setAlbums] = useState([]);
  const { setIsLoading } = useContext(IsLoadingContext);

  async function loadAlbums() {
    setIsLoading(true);
    if (albumsCount && offset >= albumsCount) {
      return false;
    }
    let { albums, count } = await handlers.getAlbumsData(10, offset);
    setAlbumsCount(count);
    setAlbums(prevAlbums => [...prevAlbums, ...albums]);
    setOffset(offset + 10);
    setIsLoading(false);
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
