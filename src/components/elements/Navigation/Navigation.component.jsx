import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.styles.css';

const Navigation = ({ movie }) => (
  <div className="rmdb-navigation">
    <div className="rmdb-navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>/</p>
      <p>{movie}</p>
    </div>
  </div>
)

Navigation.propTypes = {
  movie: PropTypes.string
}

export default Navigation;