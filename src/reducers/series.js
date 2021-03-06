const initialState = {
  generosSeries: [],
  generoSerieID: null,
  anioSerie: null,
  ordenSerie: null,
  vistaSeries: 'grid',
  GridActivoSeries: true,
  ListActivoSeries: false,
  tvs: [],
  isSeriesFetching: false,
  isSeriesFetched: false,
  errorSeries: null
}

export default (state = initialState, { type, ...payloadSeries }) => {
  switch (type) {
    case 'FETCH_GENEROS_SERIES':
      return {
        ...state,
        generosSeries: payloadSeries.generosSeries
      }
    case 'GENERO_SERIE_ID':
      return {
        ...state,
        generoSerieID: payloadSeries.generoSerieID
      }
    case 'ANIO_SERIE':
      return {
        ...state,
        anioSerie: payloadSeries.anioSerie
      }
    case 'ORDEN_SERIE':
      return {
        ...state,
        ordenSerie: payloadSeries.ordenSerie
      }
    case 'VISTA_SERIE_GRID':
      return {
        ...state,
        vistaSeries: 'grid',
        GridActivoSeries: true,
        ListActivoSeries: false
      }
    case 'VISTA_SERIE_LIST':
      return {
        ...state,
        vistaSeries: 'list',
        GridActivoSeries: false,
        ListActivoSeries: true
      }
    case 'FETCH_SERIES_REQUEST':
      return {
        ...state,
        isSeriesFetching: true
      }
    case 'FETCH_SERIES_SUCCESS':
      return {
        ...state,
        tvs: payloadSeries.tvs,
        isSeriesFetching: false,
        isSeriesFetched: true,
        errorSeries: null
      }
    case 'FETCH_SERIES_FAILURE':
      return {
        ...state,
        error: payloadSeries.error,
        isSeriesFetching: false,
        isSeriesFetched: false
      }
    default:
      return state
  }
}
