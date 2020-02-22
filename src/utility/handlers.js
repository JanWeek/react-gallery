import api from './api';
import helpers from './helpers'

async function loadAlbumData(album) {
  let albumId = album.id;
  let data = await api.loadPhotos(1, 0, albumId);
  let albumThumbnailSlug = helpers.getPhotoSlug(data.photos[0]);
  album.thumbnailSlug = albumThumbnailSlug;
  album.count = data.count;
  return album;
}

export default {
  getAlbumsData: async function(limit = 10, offset = 0, userId = false) {
    let data = await api.loadAlbums(limit, offset, userId);
    data.albums = await data.albums.map(album => loadAlbumData(album));
    data.albums = await Promise.all(data.albums);
    return data;
  },

  getAlbumInfoById: async function(albumId) {
    let albumInfo = await api.loadAlbum(albumId);
    let user = await api.loadUser(albumInfo.userId);
    let count = await api.loadPhotos(100, 0, albumId);
    count = count.count;
    albumInfo = {...albumInfo, count, user };
    return albumInfo;
  },

  getPhotos: async function(limit = 20, offset = 0, albumId = false) {
    let data = await api.loadPhotos(limit, offset, albumId);
    data = await data.photos.map(photo => {
      photo.slug = helpers.getPhotoSlug(photo);
      return photo;
    })
    return data;
  },

  getUsers: async function() {
    let users = await api.loadUsers();
    return users;
  }
}