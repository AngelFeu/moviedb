// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, iCLass, type, active, click }) => (
    <a className={`btn btn-${type} ${active ? 'active' : ''}`} aria-label="Profile" onClick={click}>
      <i className={"mdi " + iCLass} aria-hidden="true"></i> {title}
    </a>
);

Button.propTypes = {
  title : PropTypes.string,
  iCLass : PropTypes.string.isRequired,
  type : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  active : PropTypes.bool,
}

Button.defaultProps = {
  type : "primary",
  iCLass : "mdi-heart-outline",
  active : false,
}

export default Button;
