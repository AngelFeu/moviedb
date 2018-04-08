import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NamePage from './NamePage';
import Botonera from './Botonera';

const Nav = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NamePage />
        <Botonera />
        <Switch>
          <Route path="/" exact component="{ Home }" />
          <Route path="/peliculas-grid" component="{ Home }" />
          <Route path="/series-grid" component="{ Home }" />
          <Route path="/mi-lista-grid" component="{ Home }" />
          <Route path="/busqueda-peliculas-grid/:text" component="{ Home }" />
          <Route component="" />
        </Switch>
      </div>
    </nav>
  </header>
);

export default Nav;
