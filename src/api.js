export default {
  loadAlbums: async function(skip = 0, limit = 10, calculateCount = false) {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/albums/")
      .then(response => response.json())
      .then(response => {
          let data = response.splice(skip, limit);
          console.log('result', data)
          resolve(data);
        },
        error => {
          reject( error);
        }
      );
    });
  }
}
