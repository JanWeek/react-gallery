import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <Link to="/">
        <img href="" alt="" />
      </Link>
    </div>
    <div className="navigation">
      <nav>
        <ul>
          <Link to="/albums">
            <li>
              Albums
            </li>
          </Link>
          <Link to="/authors">
            <li>
              Authors
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
