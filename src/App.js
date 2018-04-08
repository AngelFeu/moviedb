import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';
import Botonera from './Nav/Botonera';
import Home from './home';
import Peliculas from './containers/PeliculasContainers';
import Series from './containers/SeriesContainers';
import MiLista from './containers/MiListaContainers';
import BusquedaPeliculas from './busqueda';

if(window.localStorage.getItem('milista') === null){
  window.localStorage.setItem('milista', '[]')
}

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <div>
                <a className="navbar-brand" href="/">Movie DB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <Botonera />
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/peliculas" component={ Peliculas } />
          <Route path="/series" component={ Series } />
          <Route path="/milista" component={ MiLista } />
          <Route path="/busqueda/:text" component={ BusquedaPeliculas } />
          <Route component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
