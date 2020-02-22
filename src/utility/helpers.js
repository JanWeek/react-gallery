export default {
  getInitials: function(fullname) {
    let names = fullname.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length >= 2) {
      initials += names[1].substring(0, 1).toUpperCase();
    }

    return initials;
  },

  getStringColor: function(name) {
    let hash = 0;

    if (name.length === 0)
      return hash;

    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 255;
        color += ('00' + value.toString(16)).substr(-2);
    }

    return color;
  },

  getPhotoSlug: function(photo) {
    if ('url' in photo) {
      return photo.url.split('/').splice(-1,1).toString();
    } else if ('thumbnailUrl' in photo) {
      return photo.thumbnailUrl.split('/').splice(-1,1).toString();
    } else {
      return false;
    }
  }
}