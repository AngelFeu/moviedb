// import React, { Component } from 'react';
import React from 'react';

const MiLista = () => (
  <div>
    <main role="main">
      <div className="py-5 bg-light">
        <div className="container">
          <h1>Mi Lista</h1>
          <div className="filters-bar">
            <div className="filters-bar-left">
              <select name="filter-viewed" id="filter-year" className="form-control">
                <option value="not-viewed">No Vistas</option>
                <option value="viewed">Vistas</option>
              </select>
            </div>
            <div className="filters-bar-right">
              <a href="mi-lista-grid.html" className="btn btn-light" aria-label="Profile">
                <i className="mdi mdi-view-grid" aria-hidden="true"></i>
              </a>
              <a href="mi-lista-list.html" className="btn btn-light active" aria-label="Profile">
                <i className="mdi mdi-view-list" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <section className="items-section">
            <div className="items-section-body">
              <div className="row">
                <article className="col-md-6">
                  <div className="list-item">
                    <div className="list-item-img">
                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                    </div>
                    <div className="list-item-body">
                      <h3 className="list-item-title">Thor: Ragnarok</h3>
                      <div className="list-item-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!</p>
                      </div>
                      <div className="list-item-actions">
                        <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile">
                          <i className="mdi mdi-delete" aria-hidden="true"></i> Quitar
                        </a>
                        <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile">
                          <i className="mdi mdi-eye-outline" aria-hidden="true"></i> Marcar como vista
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
);

export default MiLista;
