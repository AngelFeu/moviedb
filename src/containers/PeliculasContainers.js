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

const fetchPeliculas = (anioPelicula, ordenoPelicula, generoPeliculaID) => dispatch => {
  dispatch(peliculasFetched())

  let params = {
    api_key: '8bd42374a45989a00cd13bc15ad622dd',
    language: 'es-AR',
    page: 1
  }
  !!generoPeliculaID ? params.with_genres = generoPeliculaID : ''
  !!anioPelicula ? params.year = anioPelicula : ''
  !!ordenoPelicula ? params.sort_by = ordenoPelicula : ''

  Axios.get('/discover/movie', { params: params
  }).then(response =>
    dispatch(peliculasSuccess(response.data.results))
  , err =>
    dispatch(peliculasFailed(err.message))
  )
}

export default compose(
  connect(mapStateToProps, { fetchPeliculas, fetchGenerosPeliculas }),
  lifecycle({
    componentDidMount () {
      const { anioPelicula, ordenoPelicula, generoPeliculaID } = this.props
      this.props.fetchPeliculas(anioPelicula, ordenoPelicula, generoPeliculaID)
      this.props.fetchGenerosPeliculas()
    }
  })
)(Peliculas)
