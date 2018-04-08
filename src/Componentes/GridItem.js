// import React, { Component } from 'react';
import React from 'react'
import { NavLink } from 'react-router-dom'

const GridItem = ({ Id, Type, Name, Date, Img }) => (
  <article className="col-md-2">
    <NavLink to={`/detalle/${Type}/${Id}/${Name}`}>
    <a className="grid-item">
      <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + Img} alt={Name} className="img-fluid" />
      <span className="grid-item-body">
        <span className="grid-item-title">{ Name }</span>
        <span className="grid-item-date">{ Date }</span>
      </span>
    </a>
    </NavLink>
  </article>
);

export default GridItem;
