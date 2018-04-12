import { connect } from 'react-redux'
import { Home } from '../Componentes/Home'
import { compose, lifecycle } from 'recompose'
import Axios from 'axios'

const mapStateToProps = state => ({
  ...state.home
})

const peliculasSuccess = movies => ({
  type: 'FETCH_HOME_PELICULAS_SUCCESS',
  movies
})

const peliculasFetched = () => ({
  type: 'FETCH_HOME_PELICULAS_REQUEST'
})

const peliculasFailed = movieserror => ({
  type: 'FETCH_HOME_PELICULAS_FAILURE',
  movieserror
})

const fetchHomePeliculas = () => dispatch => {
  dispatch(peliculasFetched())
  Axios.get('/movie/popular', { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR',
      page: 1
    }
  }).then(response => {
    dispatch(peliculasSuccess(response.data.results))
  }, err =>
    dispatch(peliculasFailed(err.message))
  )
}

const seriesSuccess = series => ({
  type: 'FETCH_HOME_SERIES_SUCCESS',
  series
})

const seriesFetched = () => ({
  type: 'FETCH_HOME_SERIES_REQUEST'
})

const seriesFailed = serieserror => ({
  type: 'FETCH_HOME_SERIES_FAILURE',
  serieserror
})

const fetchHomeSeries = () => dispatch => {
  dispatch(seriesFetched())
  Axios.get('/tv/popular', { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR',
      page: 1
    }
  }).then(response => {
    dispatch(seriesSuccess(response.data.results))
  }, err =>
    dispatch(seriesFailed(err.message))
  )
}

const milistaSuccessCantidad = (cantidadItems) => ({
  type: 'FETCH_MILISTA_CANTIDAD',
  cantidadItems
})

const milistaSuccess = milista => ({
  type: 'FETCH_HOME_MILISTA_SUCCESS',
  milista
})

const milistaFetched = () => ({
  type: 'FETCH_HOME_MILISTA_REQUEST'
})

const milistaFailed = milistaerror => ({
  type: 'FETCH_HOME_MILISTA_FAILURE',
  milistaerror
})

const fetchHomeMiLista = () => dispatch => {
  dispatch(milistaFetched())
  try {
    const ver = JSON.parse(window.localStorage.getItem('milista'))
    if (ver !== '') {
      dispatch(milistaSuccess(ver))
      dispatch(milistaSuccessCantidad(ver.length))
    }
  } catch (err) {
    dispatch(milistaFailed(err))
  }
}

export default compose(
  connect(mapStateToProps, { fetchHomePeliculas, fetchHomeSeries, fetchHomeMiLista }),
  lifecycle({
    componentDidMount(){
      this.props.fetchHomePeliculas()
      this.props.fetchHomeSeries()
      this.props.fetchHomeMiLista()
    }
  })
)(Home)
