// import React, { Component } from 'react';
import React from 'react';
import ItemsSection from './Componentes/ItemsSection';

const Home = () => (
  <div>
    <main role="main">
        <div className="py-5 bg-light">
            <div className="container">
                <section className="items-section">
                    <h5 className="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
                    <div className="items-section-body">
                        <div className="row">
                            <article className="col-md-2">
                                <a href="detalle.html" className="grid-item">
                                    <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt={"Movie"} className="img-fluid" />
                                    <span className="grid-item-body">
                                        <span className="grid-item-title">Thor: Ragnarok</span>
                                        <span className="grid-item-date">October 25, 2017</span>
                                    </span>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="items-section">
                    <h5 className="items-section-title">Películas más Populares <a href="">Ver todas</a></h5>
                    <div className="items-section-body">
                        <div className="row">
                            <article className="col-md-2">
                                <a href="detalle.html" className="grid-item">
                                    <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt={"Movie"} className="img-fluid" />
                                    <span className="grid-item-body">
                                        <span className="grid-item-title">Thor: Ragnarok</span>
                                        <span className="grid-item-date">October 25, 2017</span>
                                    </span>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
                <section className="items-section">
                    <h5 className="items-section-title">Series más Populares <a href="">Ver todas</a></h5>
                    <div className="items-section-body">
                        <div className="row">
                            <article className="col-md-2">
                                <a href="detalle.html" className="grid-item">
                                    <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt={"Movie"} className="img-fluid" />
                                    <span className="grid-item-body">
                                    <span className="grid-item-title">Thor: Ragnarok</span>
                                    <span className="grid-item-date">October 25, 2017</span>
                                </span>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
  </div>
);

export default Home;
