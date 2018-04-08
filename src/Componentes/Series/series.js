import React from 'react'
import { connect } from 'react-redux'
import ItemsSection from '../ItemsSection'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'

const ajustarCantidad = (cantidadItems) => ({
  type: 'FETCH_MILISTA_CANTIDAD',
  cantidadItems
})

const agregarMiLista = (id, name, first_air_date, overview, backdrop_path, visto) => {
  const ver = JSON.parse(window.localStorage.getItem('milista'))

  if (!ver.find((veo) => veo.id === id)) {
    ver.push({ id, name, first_air_date, overview, backdrop_path, visto })
    window.localStorage.setItem('milista', JSON.stringify(ver))
  }

  return ajustarCantidad(ver.length)
}

const Series = ({ agregarMiLista, dispatch, tvs, isSeriesFetching, isSeriesFetched, errorSeries, generosSeries, vistaSeries, GridActivoSeries, ListActivoSeries }) => {

  const dispacharGenero = (event) => {
    dispatch({
      type: 'GENERO_SERIE_ID',
      generoPeliculaID: event.target.value
    })
  }

  const vistaGrid = () => {
    dispatch({
      type: 'VISTA_SERIE_GRID'
    })
  }

  const vistaList = () => {
    dispatch({
      type: 'VISTA_SERIE_LIST'
    })
  }

  // const Agregar = ( id, name, first_air_date, overview, backdrop_path, visto ) => {
  //   if(window.localStorage.getItem('milista') === null){
  //     window.localStorage.setItem('milista', '[]')
  //   }
  //
  //   const ver = JSON.parse(window.localStorage.getItem('milista'))
  //
  //   if (!ver.find((veo) => veo.id === id)) {
  //     ver.push({ id, name, first_air_date, overview, backdrop_path, visto })
  //     window.localStorage.setItem('milista', JSON.stringify(ver))
  //   }
  //
  //   ajustarCantidad(ver.length)
  // }

  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <h1>Series</h1>
            <div className="filters-bar">
              <div className="filters-bar-left">
                <Select id="filter-year" Items='' OptionDefault="Año" />
                <Select id="filter-sort" Items='' OptionDefault="Ordenar por" />
                <Select id="filter-genre" Items={generosSeries} OptionDefault="Géneros" alCambiar={dispacharGenero} />
              </div>
              <div className="filters-bar-right">
                <Button iCLass="mdi-view-grid" type="light" click={vistaGrid} active={GridActivoSeries} />
                <Button iCLass="mdi-view-list" type="light" click={vistaList} active={ListActivoSeries} />
              </div>
            </div>
            {isSeriesFetching ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
            {tvs === '' ? <Loading Title="" Texto="No hay series para mostrar" Mostrar="1" /> : ''}
            {errorSeries ? <Loading Title="" Texto="Error al obtener las series" Mostrar="1" /> : ''}
            {isSeriesFetched && tvs !== '' ? <ItemsSection Items={tvs} Vista={vistaSeries} Tipo='series' Agregar={agregarMiLista} /> : ''}
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect(null, { agregarMiLista })(Series)
