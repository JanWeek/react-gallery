import config from './config.js';

export default {
  loadAlbums: async function(limit = 100, skip = 0, userId = false) {
    let url = userId ? config.API_BASE_URL + `albums?userId=${userId}` : config.API_BASE_URL + 'albums';
    try {
      let response = await fetch(url);
      response = await response.json();
      let data = response.splice(skip, limit);
      return data;
    }
    catch(e) {
      console.log(e);
    }
  },
  loadPhotos: async function(limit = 100, skip = 0, albumId = false) {
    let url = albumId ? config.API_BASE_URL + `photos?albumId=${albumId}` : config.API_BASE_URL + 'photos';
    try {
      let response = await fetch(url);
      response = await response.json();
      let data = response.splice(skip, limit);
      return data;
    }
    catch(e) {
      console.log(e);
    }
  },
  loadUsers: async function(limit = 10, skip = 0) {
    let url = config.API_BASE_URL + 'users';
    try {
      let response = await fetch(url);
      response = await response.json();
      let data = response.splice(skip, limit);
      return data;
    }
    catch(e) {
      console.log(e);
    }
  }
}
