import api from './api';

async function loadAlbumData(album) {
  let albumId = album.id;
  let photos = await api.loadPhotos(100, 0, albumId);
  let albumThumbnailSlug = photos[0].url.split('/').splice(-1,1).toString();
  album.thumbnailSlug = albumThumbnailSlug;
  album.count = photos.length;
  return album;
}

export default {
  getAlbumsData: async function(limit = 10, skip = 0, userId = false) {
    let data = await api.loadAlbums(limit, skip, userId);
    data.albums = await data.albums.map(album => loadAlbumData(album));
    data.albums = await Promise.all(data.albums);
    return data;
  },

  getAlbumById: async function(albumId) {
    let album = await api.loadAlbum(albumId);
    let user = await api.loadUser(album.userId);
    album = {...album, user: user };
    return album;
  },

  getUsers: async function() {
    let users = await api.loadUsers();
    return users;
  }
}