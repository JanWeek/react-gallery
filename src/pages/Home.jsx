import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IsLoadingContext, CurrentPhotoContext } from '../context';
import PhotoList from '../components/PhotoList';
import AlbumList from '../components/AlbumList';
import UserList from '../components/UserList';
import handlers from '../utility/handlers';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [authors, setAuthors] = useState([]);
  const { setIsLoading } = useContext(IsLoadingContext);
  const { setCurrentPhoto, setCurrentGalery } = useContext(CurrentPhotoContext);

  useEffect(() => {
    loadPhotos();
    loadAlbums();
    loadAuthors();
  }, []);

  function openModalPhoto(photo) {
    setCurrentGalery(photos);
    setCurrentPhoto(photo);
  }

  async function loadPhotos() {
    setIsLoading(true);
    let photos = await handlers.getPhotos(12, 0);
    setPhotos(photos);
    setIsLoading(false);
  }

  async function loadAlbums() {
    setIsLoading(true);
    let { albums } = await handlers.getAlbumsData(5, 0);
    setAlbums(albums);
    setIsLoading(false);
  }

  async function loadAuthors() {
    setIsLoading(true);
    let authors = await handlers.getUsers(5);
    setAuthors(authors);
    setIsLoading(false);
  }

  return (
    <div>
      <h1>React Gallery</h1>
      <h2>Photos</h2>
      <PhotoList photos={photos} openModal={openModalPhoto} disableBtn="true" />
      <h2>Albums</h2>
      <AlbumList albums={albums} disableBtn="true" />
      <SC.BlockFooter>
        <SC.MoreLink to="/albums">See more albums</SC.MoreLink>
      </SC.BlockFooter>
      <h2>Authors</h2>
      <UserList users={authors} />
      <SC.BlockFooter>
        <SC.MoreLink to="/albums">See more authors</SC.MoreLink>
      </SC.BlockFooter>
    </div>
  );
}

const SC = {
  BlockFooter: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  MoreLink: styled(Link)`
    color: #aaa;
    font-size: 14px;
    margin: 10px 0 10px auto;
    align-self: end;
  `
}

export default Home;