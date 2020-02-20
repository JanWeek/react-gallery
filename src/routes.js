import Home from './pages/Home';
import Authors from './pages/Authors';
import Albums from './pages/Albums';
import Album from './pages/Album';

export default [
  { path: '/', name: 'Home', Component: Home },
  { path: '/albums', name: 'Albums', Component: Albums },
  { path: '/albums/:id', name: 'Album', Component: Album },
  { path: '/authors', name: 'Authors', Component: Authors }
];