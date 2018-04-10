// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ id, Items, selected, OptionDefault, alCambiar }) => (
  <select name={id} id={id} value={selected} onChange={(event) => alCambiar(event)} className="form-control">
    {OptionDefault ? <option value="">{OptionDefault}</option> : ''}
    {Items ? Items.map(function(Item,index) {
                return <option value={Item.id} key={index}>{Item.name}</option>
              })
      : null
    }
  </select>
)

// Button.propTypes = {
//   title : PropTypes.string.isRequired,
//   icon : PropTypes.node,
//   type : PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
//   active : PropTypes.bool,
// }
//
// Button.defaultProps = {
//   type : "primary",
//   icon : null,
//   active : false,
// }

export default Select;
