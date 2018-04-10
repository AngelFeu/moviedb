import { connect } from 'react-redux'
import { Peliculas } from '../Componentes/Peliculas'
import { compose, lifecycle } from 'recompose'
import Axios from 'axios'

const mapStateToProps = state => ({
  ...state.peliculas
})

const generosPeliculasSuccess = generosPeliculas => ({
  type: 'FETCH_GENEROS_PELICULAS',
  generosPeliculas
})

const fetchGenerosPeliculas = () => dispatch => {
  Axios.get('/genre/movie/list', { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR'
    }
  }).then(response => {
    dispatch(generosPeliculasSuccess(response.data.genres))
  }, err =>
    console.log('err', err.message)
  )
}

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

const fetchPeliculasWhitGenRe = (generoPeliculaID) => dispatch => {
  dispatch(peliculasFetched())
  Axios.get(`/genre/${generoPeliculaID}/movies`, { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR',
      page: 1
    }
  }).then(response =>
    dispatch(peliculasSuccess(response.data.results))
  , err =>
    dispatch(peliculasFailed(err.message))
  )
}

const fetchPeliculas = () => dispatch => {
  dispatch(peliculasFetched())
  Axios.get('/movie/popular', { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR',
      page: 1
    }
  }).then(response =>
    dispatch(peliculasSuccess(response.data.results))
  , err =>
    dispatch(peliculasFailed(err.message))
  )
}

export default compose(
  connect(mapStateToProps, { fetchPeliculas, fetchPeliculasWhitGenRe, fetchGenerosPeliculas }),
  lifecycle({
    componentDidMount () {
      !!this.props.generoPeliculaID ? this.props.fetchPeliculasWhitGenRe() : this.props.fetchPeliculas(this.props.generoPeliculaID)
      this.props.fetchGenerosPeliculas()
    }
  })
)(Peliculas)
