import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Base = ({ children }) => (
  <div>
    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
