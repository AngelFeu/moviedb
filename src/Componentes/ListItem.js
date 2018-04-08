// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ListItem = ({ Id, Name, Overview, Img, Type, Agregar, Quitar, Visto }) => ( // Agregar, Quitar, Visto
  <article className="col-md-6">
    <div className="list-item">
      <div className="list-item-img">
        <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + Img} alt={Name} className="img-fluid" />
      </div>
      <div className="list-item-body">
        <h3 className="list-item-title">{Name}</h3>
        <div className="list-item-description">
          <p>{Overview}</p>
        </div>
        {/* <Button title="Agregar a mi Lista" click={click} /> */}
        { !!Agregar && <Button title="Agregar a mi Lista" click={Agregar} />}
        { !!Quitar && <Button title="Quitar" click={Quitar} />}
        { !!Visto && <Button title="Marcar como vista" click={Visto} />}
      </div>
    </div>
  </article>
);

ListItem.propTypes = {
  Agregar: PropTypes.oneOfType([
    PropTypes.boolean,
    PropTypes.func
  ]),
}

export default ListItem;
