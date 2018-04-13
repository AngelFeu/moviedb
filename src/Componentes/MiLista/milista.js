import React from 'react'
import { connect } from 'react-redux'
import ItemsSection from '../ItemsSection'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'
import {
  VISTA_MILISTA_GRID
} from '../../constants/action-types'

const comboMiLista = event => dispatch => {
  dispatch({
    type: 'FILTRO_MILISTA',
    filtroMiLista: event.target.value
  })
  dispatch(fetchMiLista())
}

const vistaGrid = () => ({
  type: VISTA_MILISTA_GRID
})

const vistaList = () => ({
  type: 'VISTA_MILISTA_LIST'
})

const Quitar = ( id ) => dispatch => {
  const milista = JSON.parse(window.localStorage.getItem('milista'))

  const item = milista.find((item) => item.id === id)
  if (item) {
    const quitar = milista.indexOf(item)
    milista.splice(quitar, 1)
    window.localStorage.setItem('milista', JSON.stringify(milista))
  }

  dispatch(fetchMiLista())
}

const Visto = ( id ) => dispatch => {
  const milista = JSON.parse(window.localStorage.getItem('milista'))
  const nuevaLista = milista.map(item => {
    if (item.id === id) {
      item.visto = true
    }
    return item
  })
  window.localStorage.setItem('milista', JSON.stringify(nuevaLista))

  dispatch(fetchMiLista())
}

const milistaSuccess = milista => ({
  type: 'FETCH_MILISTA_SUCCESS',
  milista
})

const milistaFetched = () => ({
  type: 'FETCH_MILISTA_REQUEST'
})

const milistaFailed = errorMiLista => ({
  type: 'FETCH_MILISTA_FAILURE',
  errorMiLista
})

const fetchMiLista = () => ( dispatch, getState ) => {

  dispatch(milistaFetched())

  const { milista: { filtroMiLista } } = getState()

  try {
    const ver = JSON.parse(window.localStorage.getItem('milista'))
    if (ver !== '') {
      let vernuevo = ver
      filtroMiLista === 'vistas'
        ? vernuevo = ver.filter(function(veo) {
            return veo.visto === true
          })
        : ver
      filtroMiLista === 'novistas'
        ? vernuevo = ver.filter(function(veo) {
            return veo.visto === false
          })
        : ver
     dispatch(milistaSuccess(vernuevo))
     dispatch(ajustarCantidad(ver.length))
    }
  } catch (err) {
    dispatch(milistaFailed(err))
  }
}

const ajustarCantidad = (cantidadItems) => ({
  type: 'FETCH_MILISTA_CANTIDAD',
  cantidadItems
})

const filtro = [{id: 'vistas', name: 'vistas'},{id: 'novistas', name: 'no vistas'}]

const Series = ({ comboMiLista, filtroMiLista, vistaGrid, vistaList, Quitar, Visto, milista, isMiListaFetching, isMiListaFetched, errorMiLista, vistaMiLista, GridActivoMiLista, ListActivoMiLista }) => {
  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <h1>Mi Lista</h1>
            <div className="filters-bar">
              <div className="filters-bar-left">
                <Select id="filter-viewed" Items={filtro} selected={filtroMiLista} OptionDefault="todas" alCambiar={comboMiLista} />
              </div>
              <div className="filters-bar-right">
                <div className="list-item-actions">
                  <Button iCLass="mdi-view-grid" type="light" click={vistaGrid} active={GridActivoMiLista} />
                  <Button iCLass="mdi-view-list" type="light" click={vistaList} active={ListActivoMiLista} />
                </div>
              </div>
            </div>
            {isMiListaFetching && milista.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
            {isMiListaFetched && milista.length === 0 ? <Loading Title="" Texto="No hay elementos agregados a la lista" Mostrar="1" /> : ''}
            {errorMiLista ? <Loading Title="" Texto="Error al obtener los elementos de la lista" Mostrar="1" /> : ''}
            {isMiListaFetched && milista.length > 0 ? <ItemsSection Items={milista} Vista={vistaMiLista} Tipo='milista' Quitar={Quitar} Visto={Visto} /> : ''}
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect(null, { comboMiLista, vistaGrid, vistaList, Quitar, Visto })(Series)
