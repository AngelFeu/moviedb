import React from 'react'
import { connect } from 'react-redux'
import ItemsSection from '../ItemsSection'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'
import Axios from 'axios'

const comboAnio = event => ({
  type: 'ANIO_PELICULA',
  anioPelicula: event.target.value
})

const comboOrden = event => ({
  type: 'ORDEN_PELICULA',
  ordenPelicula: event.target.value
})

const ajustarCantidad = (cantidadItems) => ({
  type: 'FETCH_MILISTA_CANTIDAD',
  cantidadItems
})

const agregarMiLista = (id, name, first_air_date, overview, backdrop_path, visto) => {
  const ver = JSON.parse(window.localStorage.getItem('milista'))

  if (!ver.find((veo) => veo.id === id)) {
    ver.push({ tipo: 'movie', id, name, first_air_date, overview, backdrop_path, visto })
    window.localStorage.setItem('milista', JSON.stringify(ver))
  }

  return ajustarCantidad(ver.length)
}

const dispacharGenero = (event) => ({
  type: 'GENERO_PELICULA_ID',
  generoPeliculaID: event.target.value
})

const vistaGrid = () => ({
  type: 'VISTA_PELICULA_GRID'
})

const vistaList = () => ({
  type: 'VISTA_PELICULA_LIST'
})

const peliculasSuccess = movies => ({
  type: 'FETCH_PELICULAS_SUCCESS',
  movies
})

const peliculasFetched = () => ({
  type: 'FETCH_PELICULAS_REQUEST'
})

const peliculasFailed = error => ({
  type: 'FETCH_PELICULAS_FAILURE',
  error
})

const fetchPeliculas = (generoPeliculaID) => {
  peliculasFetched()

  let params = {
    api_key: '8bd42374a45989a00cd13bc15ad622dd',
    language: 'es-AR',
    page: 1
  }
  !!generoPeliculaID ? params.with_genres = generoPeliculaID : ''
  // !!yearPelicula ? params.year = yearPelicula : ''
  // !!sortbyPelicula ? params.sort_by = sortbyPelicula : ''

  Axios.get('/discover/movie', { params: params
  }).then(response =>
    peliculasSuccess(response.data.results)
  , err =>
    peliculasFailed(err.message)
  )
}

const generoOnChange = (event) => {
  dispacharGenero(event)
//  fetchPeliculas(event.target.value)
}

const anios = [{id: '2018', name: '2018'},{id: '2017', name: '2017'},{id: '2016', name: '2016'}]
const orden = [{id: 'popularity.desc', name: 'Popularidad'},{id: 'release_date.desc', name: 'Fecha'},{id: 'original_title.asc', name: 'Titulo'}]

const Peliculas = ({ comboAnio, anioPelicula, comboOrden, ordenPelicula, dispacharGenero, vistaGrid, vistaList, agregarMiLista, movies, generoPeliculaID, isFetching, isFetched, error, generosPeliculas, vistaPeliculas, GridActivoPeliculas, ListActivoPeliculas }) => {
  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <h1>Películas</h1>
            <div className="filters-bar">
              <div className="filters-bar-left">
                <Select id="filter-year" Items={anios} selected={anioPelicula} OptionDefault="Año" alCambiar={comboAnio} />
                <Select id="filter-sort" Items={orden} selected={ordenPelicula} OptionDefault="Ordenar por" alCambiar={comboOrden} />
                <Select id="filter-genre" Items={generosPeliculas} selected={generoPeliculaID} OptionDefault="Géneros" alCambiar={dispacharGenero}/>
              </div>
              <div className="filters-bar-right">
                <Button iCLass="mdi-view-grid" type="light" click={vistaGrid} active={GridActivoPeliculas} />
                <Button iCLass="mdi-view-list" type="light" click={vistaList} active={ListActivoPeliculas} />
              </div>
            </div>
            {isFetching && movies.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
            {isFetched && movies.length === 0 ? <Loading Title="" Texto="No hay peliculas para mostrar" Mostrar="1" /> : ''}
            {error ? <Loading Title="" Texto="Error al obtener las peliculas" Mostrar="1" /> : ''}
            {isFetched && movies.length > 0 ? <ItemsSection Items={movies} Vista={vistaPeliculas} Tipo='movie' Agregar={agregarMiLista} /> : ''}
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect(null, { comboAnio, comboOrden, dispacharGenero, agregarMiLista, vistaGrid, vistaList })(Peliculas)
