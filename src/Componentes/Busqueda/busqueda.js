import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Button from '../Button'
import Loading from '../Loading'
import ItemsSection from '../ItemsSection'

const ajustarCantidad = (cantidadItems) => ({
  type: 'FETCH_MILISTA_CANTIDAD',
  cantidadItems
})

const agregarMiLista = (id, name, first_air_date, overview, backdrop_path, visto) => {
  const ver = JSON.parse(window.localStorage.getItem('milista'))

  if (!ver.find((veo) => veo.id === id)) {
    ver.push({ tipo: 'movie', id, name, first_air_date, overview, backdrop_path, visto })
    window.localStorage.setItem('milista', JSON.stringify(ver))
  }

  return ajustarCantidad(ver.length)
}

class Busqueda extends Component {
  constructor({ match, agregarMiLista }) {
    super({ match, agregarMiLista })
    this.state = {
      text: match.params.text,
      movies: [],
      tvs: [],
      cantidadMovies: 0,
      cantidadTVs: 0,
      botonMoviesActivo: true,
      botonTVsActivo: false,
      vistaGridActivo: true,
      vistaListActivo: false,
      isFetching: true,
      isFetched: false
    }

    this.agregarMiLista = agregarMiLista.bind(this)

    this.axios = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: '8bd42374a45989a00cd13bc15ad622dd',
        language: 'es-AR',
      },
    })
  }

  componentDidMount () {
    const { text } = this.state
    this.getMovies(text)
    this.getTVs(text)
    this.setState({
      isFetching: false,
      isFetched: true
    })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.text !== nextProps.match.params.text) {
      this.setState({
        text: nextProps.match.params.text
      })

      this.getMovies(nextProps.match.params.text)
      this.getTVs(nextProps.match.params.text)
    }
  }

  getMovies = (text) => {
    axios.get(`/search/movie`, { params: {
        api_key: '8bd42374a45989a00cd13bc15ad622dd',
        language: 'es-AR',
        query: text
      }
    }).then(res => {
      this.setState({
        movies: res.data.results,
        cantidadMovies: res.data.total_results
      })
    })
  }

  getTVs = (text) => {
    axios.get(`/search/tv`, { params: {
        api_key: '8bd42374a45989a00cd13bc15ad622dd',
        language: 'es-AR',
        query: text
      }
    }).then(res => {
      this.setState({
        tvs: res.data.results,
        cantidadTVs: res.data.total_results
      })
    })
  }

  render(){
    const botonMoviesOnClick = (event) => (
      this.setState({
        botonMoviesActivo: true,
        botonTVsActivo: false
      })
    )

    const botonTVsOnClick = (event) => (
      this.setState({
        botonMoviesActivo: false,
        botonTVsActivo: true
      })
    )

    const botonGridOnClick = (event) => (
      this.setState({
        vistaGridActivo: true,
        vistaListActivo: false
      })
    )

    const botonListOnClick = (event) => (
      this.setState({
        vistaGridActivo: false,
        vistaListActivo: true
      })
    )

    const { agregarMiLista, text, isFetching, isFetched, movies, tvs, cantidadMovies, cantidadTVs, botonMoviesActivo, botonTVsActivo, vistaGridActivo, vistaListActivo } = this.state
    return(
      <div className="py-5 bg-light">
        <div className="container">
          <h1>Búsqueda > "{text}" en Series</h1>
          <div className="filters-bar">
            <div className="filters-bar-left">
              <Button title={`Películas (${cantidadMovies})`} type="outline-dark" active={botonMoviesActivo} click={botonMoviesOnClick} />
              <Button title={`Series (${cantidadTVs})`} type="outline-dark" active={botonTVsActivo} click={botonTVsOnClick} />
            </div>
            <div className="filters-bar-right">
              <Button iCLass="mdi-view-grid" type="light" click={botonGridOnClick} active={vistaGridActivo} />
              <Button iCLass="mdi-view-list" type="light" click={botonListOnClick} active={vistaListActivo} />
            </div>
          </div>
          {isFetching ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
          {isFetched ? <ItemsSection Items={botonMoviesActivo ? movies : tvs} Vista={vistaGridActivo ? 'grid' : 'list'} Tipo={botonMoviesActivo ? 'movie' : 'tv'} Agregar={this.agregarMiLista} /> : ''}
        </div>
      </div>
    )
  }
}

export default connect(null, { agregarMiLista })(Busqueda);
