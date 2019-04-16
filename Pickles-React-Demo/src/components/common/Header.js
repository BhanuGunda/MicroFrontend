import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
        </li>
        <li className="breadcrumb-item">
          <Link to="/about" activeClassName="active">About</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link to="/vehicles" activeClassName="active">Vehicles</Link>
          {loading && <LoadingDots interval={100} dots={20} />}
        </li>
    </ol>
  </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
