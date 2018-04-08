import { connect } from 'react-redux'
import { MiLista } from '../Componentes/MiLista'
import { compose, lifecycle } from 'recompose'

const mapStateToProps = state => ({
  ...state.milista
})

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

const fetchMiLista = () => dispatch => {
  dispatch(milistaFetched())

  if(window.localStorage.getItem('milista') === null){
    window.localStorage.setItem('milista', '[]')
  }

  try {
    const ver = JSON.parse(window.localStorage.getItem('milista'))
    if (ver !== '') {
      dispatch(milistaSuccess(ver))
    }
  } catch (err) {
    dispatch(milistaFailed(err))
  }
}

export default compose(
  connect(mapStateToProps, { fetchMiLista }),
  lifecycle({
    componentDidMount () {
      this.props.fetchMiLista()
    }
  })
)(MiLista)
