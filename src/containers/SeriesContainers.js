import { connect } from 'react-redux'
import { Series } from '../Componentes/Series'
import { compose, lifecycle } from 'recompose'
import Axios from 'axios'

const mapStateToProps = state => ({
  ...state.series
})

const generosSeriesSuccess = generosSeries => ({
  type: 'FETCH_GENEROS_SERIES',
  generosSeries
})

const fetchGenerosSeries = () => dispatch => {
  Axios.get('/genre/tv/list', { params: {
      api_key: '8bd42374a45989a00cd13bc15ad622dd',
      language: 'es-AR'
    }
  }).then(response =>
    dispatch(generosSeriesSuccess(response.data.genres))
  , err =>
    console.log('err', err.message)
  )
}

const seriesSuccess = tvs => ({
  type: 'FETCH_SERIES_SUCCESS',
  tvs
})

const seriesFetched = () => ({
  type: 'FETCH_SERIES_REQUEST'
})

const seriesFailed = error => ({
  type: 'FETCH_SERIES_FAILURE',
  error
})

const fetchSeries = (anioSerie, ordenSerie, generoSerieID) => dispatch => {
  dispatch(seriesFetched())

  let params = {
    api_key: '8bd42374a45989a00cd13bc15ad622dd',
    language: 'es-AR',
    page: 1
  }
  !!generoSerieID ? params.with_genres = generoSerieID : ''
  !!anioSerie ? params.air_date = anioSerie : ''
  !!ordenSerie ? params.sort_by = ordenSerie : ''

  Axios.get('/discover/tv', { params: params
  }).then(response => {
    dispatch(seriesSuccess(response.data.results))
  }, err =>
    dispatch(seriesFailed(err.message))
  )
}

export default compose(
  connect(mapStateToProps, { fetchSeries, fetchGenerosSeries }),
  lifecycle({
    componentDidMount(){
      const { anioSerie, ordenSerie, generoSerieID } = this.props
      this.props.fetchSeries(anioSerie, ordenSerie, generoSerieID)
      this.props.fetchGenerosSeries()
    }
  })
)(Series)
