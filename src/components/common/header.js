import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {' | '}
      <Link to="top-movies" activeClassName="active">Top Movies</Link>
      {' | '}
      <Link to="about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Header;
