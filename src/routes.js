import Home from './pages/Home';
import Authors from './pages/Authors';
import Albums from './pages/Albums';

export default [
  { path: '/', name: 'Home', Component: Home },
  { path: '/albums', name: 'Albums', Component: Albums },
  { path: '/authors', name: 'Authors', Component: Authors }
];