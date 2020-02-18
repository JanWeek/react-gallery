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
    let albums = await api.loadAlbums(limit, skip, userId);
    let data = await albums.map(album => loadAlbumData(album));
    data = await Promise.all(data);
    return data;
  }
}