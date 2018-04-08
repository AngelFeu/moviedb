import React from 'react'
import { connect } from 'react-redux'
import ItemsSection from '../ItemsSection'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'
import {
  VISTA_MILISTA_GRID
} from '../../constants/action-types'

const Series = ({ dispatch, milista, isMiListaFetching, isMiListaFetched, errorMiLista, vistaMiLista, GridActivoMiLista, ListActivoMiLista }) => {

  const vistaGrid = () => {
    dispatch({
      type: VISTA_MILISTA_GRID
    })
  }

  const vistaList = () => {
    dispatch({
      type: 'VISTA_MILISTA_LIST'
    })
  }

  const Quitar = ( id ) => {
    const milista = JSON.parse(window.localStorage.getItem('milista'))

    const item = milista.find((item) => item.id === id)
    if (item) {
      const quitar = milista.indexOf(item)
      milista.splice(quitar, 1)
      window.localStorage.setItem('milista', JSON.stringify(milista))
    }
  }

  const Visto = ( id ) => {
    const milista = JSON.parse(window.localStorage.getItem('milista'))
console.log(milista)
    const nuevaLista = milista.map(item => {
      if (item.id === id) {
        item.visto = true
      }
      return item
    })
    window.localStorage.setItem('milista', JSON.stringify(nuevaLista))
console.log(nuevaLista)
  }

  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <h1>Mi Lista</h1>
            <div className="filters-bar">
              <div className="filters-bar-left">
                <Select id="filter-year" Items='' OptionDefault="Año" />
              </div>
              <div className="filters-bar-right">
                <div className="list-item-actions">
                  <Button iCLass="mdi-view-grid" type="light" click={vistaGrid} active={GridActivoMiLista} />
                  <Button iCLass="mdi-view-list" type="light" click={vistaList} active={ListActivoMiLista} />
                </div>
              </div>
            </div>
            {isMiListaFetching ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
            {milista === '' ? <Loading Title="" Texto="No hay elementos agregados a la lista" Mostrar="1" /> : ''}
            {errorMiLista ? <Loading Title="" Texto="Error al obtener los elementos de la lista" Mostrar="1" /> : ''}
            {isMiListaFetched && milista !== '' ? <ItemsSection Items={milista} Vista={vistaMiLista} Tipo='milista' Quitar={Quitar} Visto={Visto} /> : ''}
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect()(Series)
