const initialState = {
  homePeliculas: [],
  isHomePeliculasFetching: false,
  isHomePeliculasFetched: false,
  HomePeliculaserror: null,
  homeSeries: [],
  isHomeSeriesFetching: false,
  isHomeSeriesFetched: false,
  HomeSerieserror: null,
  homeMiLista: [],
  isHomeMiListaFetching: false,
  isHomeMiListaFetched: false,
  HomeMiListaerror: null
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case 'FETCH_HOME_PELICULAS_REQUEST':
      return {
        ...state,
        isHomePeliculasFetching: true
      }
    case 'FETCH_HOME_PELICULAS_SUCCESS':
      return {
        ...state,
        homePeliculas: payload.movies,
        isHomePeliculasFetching: false,
        isHomePeliculasFetched: true,
        HomePeliculaserror: null
      }
    case 'FETCH_HOME_PELICULAS_FAILURE':
      return {
        ...state,
        HomePeliculaserror: payload.movieserror,
        isHomePeliculasFetching: false,
        isHomePeliculasFetched: false
      }
    case 'FETCH_HOME_SERIES_REQUEST':
      return {
        ...state,
        isHomeSeriesFetching: true
      }
    case 'FETCH_HOME_SERIES_SUCCESS':
      return {
        ...state,
        homeSeries: payload.series,
        isHomeSeriesFetching: false,
        isHomeSeriesFetched: true,
        HomeSerieserror: null
      }
    case 'FETCH_HOME_SERIES_FAILURE':
      return {
        ...state,
        HomeSerieserror: payload.serieserror,
        isHomeSeriesFetching: false,
        isHomeSeriesFetched: false
      }
    case 'FETCH_HOME_MILISTA_REQUEST':
      return {
        ...state,
        isHomeMiListaFetching: true
      }
    case 'FETCH_HOME_MILISTA_SUCCESS':
      return {
        ...state,
        homeMiLista: payload.milista,
        isHomeMiListaFetching: false,
        isHomeMiListaFetched: true,
        HomeMiListaerror: null
      }
    case 'FETCH_HOME_MILISTA_FAILURE':
      return {
        ...state,
        HomeMiListaerror: payload.milistaerror,
        isHomeMiListaFetching: false,
        isHomeMiListaFetched: false
      }
    default:
      return state
  }
}
