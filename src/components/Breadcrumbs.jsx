import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return false;
  }

  return (
    <div>
      {crumbs.map(({ name, path }, key) => {
        if (key + 1 === crumbs.length) {
          return (
            <span key={key}>
              {name}
            </span>
          );
        } else {
          return (
            <Link key={key} to={path}>
              {name}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Breadcrumbs;
