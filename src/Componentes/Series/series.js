import React from 'react'
import { connect } from 'react-redux'
import ItemsSection from '../ItemsSection'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'

const comboAnio = event => ({
  type: 'ANIO_SERIE',
  anioSerie: event.target.value
})

const comboOrden = event => ({
  type: 'ORDEN_SERIE',
  ordenSerie: event.target.value
})

const ajustarCantidad = (cantidadItems) => ({
  type: 'FETCH_MILISTA_CANTIDAD',
  cantidadItems
})

const agregarMiLista = (id, name, first_air_date, overview, backdrop_path, visto) => {
  const ver = JSON.parse(window.localStorage.getItem('milista'))

  if (!ver.find((veo) => veo.id === id)) {
    ver.push({ tipo: 'tv', id, name, first_air_date, overview, backdrop_path, visto })
    window.localStorage.setItem('milista', JSON.stringify(ver))
  }

  return ajustarCantidad(ver.length)
}

const dispacharGenero = (event) => ({
  type: 'GENERO_SERIE_ID',
  generoSerieID: event.target.value
})

const vistaGrid = () => ({
  type: 'VISTA_SERIE_GRID'
})

const vistaList = () => ({
  type: 'VISTA_SERIE_LIST'
})

// const fetchSeries = (generoSerieID) => {
//   seriesFetched()
//   Axios.get('/tv/popular', { params: {
//       api_key: '8bd42374a45989a00cd13bc15ad622dd',
//       language: 'es-AR',
//       genres: generoSerieID,
//       page: 1
//     }
//   }).then(response => {
//     seriesSuccess(response.data.results)
//   }, err =>
//     seriesFailed(err.message)
//   )
// }

const anios = [{id: '2018', name: '2018'},{id: '2017', name: '2017'},{id: '2016', name: '2016'}]
const orden = [{id: 'popularity.desc', name: 'Popularidad'},{id: 'release_date.desc', name: 'Fecha'},{id: 'original_title.asc', name: 'Titulo'}]

const Series = ({ comboAnio, anioSerie, comboOrden, ordenSerie, dispacharGenero, vistaGrid, vistaList, agregarMiLista, tvs, generoSerieID, isSeriesFetching, isSeriesFetched, errorSeries, generosSeries, vistaSeries, GridActivoSeries, ListActivoSeries }) => {
  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <h1>Series</h1>
            <div className="filters-bar">
              <div className="filters-bar-left">
                <Select id="filter-year" Items={anios} selected={anioSerie} OptionDefault="Año" alCambiar={comboAnio} />
                <Select id="filter-sort" Items={orden} selected={ordenSerie} OptionDefault="Ordenar por" alCambiar={comboOrden} />
                <Select id="filter-genre" Items={generosSeries} selected={generoSerieID} OptionDefault="Géneros" alCambiar={dispacharGenero} />
              </div>
              <div className="filters-bar-right">
                <Button iCLass="mdi-view-grid" type="light" click={vistaGrid} active={GridActivoSeries} />
                <Button iCLass="mdi-view-list" type="light" click={vistaList} active={ListActivoSeries} />
              </div>
            </div>
            {isSeriesFetching && tvs.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
            {isSeriesFetched && tvs.length === 0 ? <Loading Title="" Texto="No hay series para mostrar" Mostrar="1" /> : ''}
            {errorSeries ? <Loading Title="" Texto="Error al obtener las series" Mostrar="1" /> : ''}
            {isSeriesFetched && tvs.length > 0 ? <ItemsSection Items={tvs} Vista={vistaSeries} Tipo='tv' Agregar={agregarMiLista} /> : ''}
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect(null, { comboAnio, comboOrden, agregarMiLista, dispacharGenero, vistaGrid, vistaList })(Series)
