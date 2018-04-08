import React from 'react'
import { connect } from 'react-redux'
import ItemsSection from '../ItemsSection'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'

const Peliculas = ({ dispatch, movies, isFetching, isFetched, error, generosPeliculas, vistaPeliculas, GridActivoPeliculas, ListActivoPeliculas }) => {

  const dispacharGenero = (event) => {
    dispatch({
      type: 'GENERO_PELICULA_ID',
      generoPeliculaID: event.target.value
    })
  }

  const vistaGrid = () => {
    dispatch({
      type: 'VISTA_PELICULA_GRID'
    })
  }

  const vistaList = () => {
    dispatch({
      type: 'VISTA_PELICULA_LIST'
    })
  }

  const Agregar = ( id, name, first_air_date, overview, backdrop_path, visto ) => {
    const ver = JSON.parse(window.localStorage.getItem('milista'))

    if (!ver.find((veo) => veo.id === id)) {
      ver.push({ id, name, first_air_date, overview, backdrop_path, visto })
      window.localStorage.setItem('milista', JSON.stringify(ver))
    }
  }

  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <h1>Películas</h1>
            <div className="filters-bar">
              <div className="filters-bar-left">
                <Select id="filter-year" Items='' OptionDefault="Año" />
                <Select id="filter-sort" Items='' OptionDefault="Ordenar por" />
                <Select id="filter-genre" Items={generosPeliculas} OptionDefault="Géneros" alCambiar={dispacharGenero}/>
              </div>
              <div className="filters-bar-right">
                <Button iCLass="mdi-view-grid" type="light" click={vistaGrid} active={GridActivoPeliculas} />
                <Button iCLass="mdi-view-list" type="light" click={vistaList} active={ListActivoPeliculas} />
              </div>
            </div>
            {isFetching && movies.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
            {isFetched && movies.length === 0 ? <Loading Title="" Texto="No hay peliculas para mostrar" Mostrar="1" /> : ''}
            {error ? <Loading Title="" Texto="Error al obtener las peliculas" Mostrar="1" /> : ''}
            {isFetched && movies.length > 0 ? <ItemsSection Items={movies} Vista={vistaPeliculas} Tipo='peliculas' Agregar={Agregar} /> : ''}
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect()(Peliculas)
