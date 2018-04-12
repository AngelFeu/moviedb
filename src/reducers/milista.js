import {
  VISTA_MILISTA_GRID
} from '../constants/action-types'

const initialState = {
  vistaMiLista: 'grid',
  GridActivoMiLista: true,
  ListActivoMiLista: false,
  milista: [],
  isMiListaFetching: false,
  isMiListaFetched: false,
  errorMiLista: null,
  cantidadMiLista: 0,
  filtroMiLista: null
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case 'FILTRO_MILISTA':
      return {
        ...state,
        filtroMiLista: payload.filtroMiLista
      }
    case VISTA_MILISTA_GRID:
      return {
        ...state,
        vistaMiLista: 'grid',
        GridActivoMiLista: true,
        ListActivoMiLista: false
      }
    case 'VISTA_MILISTA_LIST':
      return {
        ...state,
        vistaMiLista: 'list',
        GridActivoMiLista: false,
        ListActivoMiLista: true
      }
    case 'FETCH_MILISTA_CANTIDAD':
      return {
        ...state,
        cantidadMiLista: payload.cantidadItems
      }
    case 'FETCH_MILISTA_REQUEST':
      return {
        ...state,
        isMiListaFetching: true
      }
    case 'FETCH_MILISTA_SUCCESS':
      return {
        ...state,
        milista: payload.milista,
        cantidadMiLista: payload.milista.length,
        isMiListaFetching: false,
        isMiListaFetched: true,
        errorMiLista: null
      }
    case 'FETCH_MILISTA_FAILURE':
      return {
        ...state,
        errorMiLista: payload.error,
        isMiListaFetching: false,
        isMiListaFetched: false
      }
    default:
      return state
  }
}
