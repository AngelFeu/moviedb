const initialState = {
  generosPeliculas: [],
  generoPeliculaID: null,
  anioPelicula: null,
  ordenoPelicula: null,
  vistaPeliculas: 'grid',
  GridActivoPeliculas: true,
  ListActivoPeliculas: false,
  movies: [],
  isFetching: false,
  isFetched: false,
  error: null
}

export default (state = initialState, { type, ...payload }) => {
  switch (type) {
    case 'FETCH_GENEROS_PELICULAS':
      return {
        ...state,
        generosPeliculas: payload.generosPeliculas
      }
    case 'GENERO_PELICULA_ID':
      return {
        ...state,
        generoPeliculaID: payload.generoPeliculaID
      }
    case 'ANIO_PELICULA':
      return {
        ...state,
        anioPelicula: payload.anioPelicula
      }
    case 'ORDEN_PELICULA':
      return {
        ...state,
        ordenPelicula: payload.ordenPelicula
      }
    case 'VISTA_PELICULA_GRID':
      return {
        ...state,
        vistaPeliculas: 'grid',
        GridActivoPeliculas: true,
        ListActivoPeliculas: false
      }
    case 'VISTA_PELICULA_LIST':
      return {
        ...state,
        vistaPeliculas: 'list',
        GridActivoPeliculas: false,
        ListActivoPeliculas: true
      }
    case 'FETCH_PELICULAS_REQUEST':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_PELICULAS_SUCCESS':
      return {
        ...state,
        movies: payload.movies,
        isFetching: false,
        isFetched: true,
        error: null
      }
    case 'FETCH_PELICULAS_FAILURE':
      return {
        ...state,
        error: payload.error,
        isFetching: false,
        isFetched: false
      }
    default:
      return state
  }
}
