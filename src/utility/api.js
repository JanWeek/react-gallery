import config from './config.js';

export default {
  loadAlbums: async function(limit = 100, offset = 0, userId = false) {
    let url = userId ? config.API_BASE_URL + `albums?userId=${userId}` : config.API_BASE_URL + 'albums';
    try {
      let data = {};
      let response = await fetch(url);
      response = await response.json();
      data.count = response.length;
      data.albums = response.splice(offset, limit);
      return data;
    }
    catch(e) {
      console.log(e);
    }
  },

  loadAlbum: async function(albumId) {
    let url = config.API_BASE_URL + `albums/${albumId}`
    try {
      let response = await fetch(url);
      response = await response.json();
      return response;
    }
    catch(e) {
      console.log(e);
    }
  },

  loadPhotos: async function(limit = 100, offset = 0, albumId = false) {
    let url = albumId ? config.API_BASE_URL + `photos?albumId=${albumId}` : config.API_BASE_URL + 'photos';
    try {
      let data = {};
      let response = await fetch(url);
      response = await response.json();
      data.count = response.length;
      data.photos = response.splice(offset, limit);
      return data;
    }
    catch(e) {
      console.log(e);
    }
  },

  loadUsers: async function(limit = 10, offset = 0) {
    let url = config.API_BASE_URL + 'users';
    try {
      let response = await fetch(url);
      response = await response.json();
      let data = response.splice(offset, limit);
      return data;
    }
    catch(e) {
      console.log(e);
    }
  },

  loadUser: async function(userId) {
    let url = config.API_BASE_URL + `users/${userId}`;
    try {
      let response = await fetch(url);
      response = await response.json();
      return response;
    }
    catch(e) {
      console.log(e);
    }
  }
}
