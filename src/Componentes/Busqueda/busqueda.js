import React, { Component } from 'react'
import axios from 'axios'

class Busqueda extends Component {
  constructor({ match }) {
    super({ match })

    this.state = {
      text: match.params.text,
      movies: [],
      tvs: []
    }

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
  }

  getMovies = (text) => {
    axios.get(`/search/movie`, { params: {
        api_key: '8bd42374a45989a00cd13bc15ad622dd',
        language: 'es-AR',
        query: text
      }
    }).then(res => {
      this.setState({
        movies: res.data.results
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
        tvs: res.data.results
      })
    })
  }

  render(){
    const { text } = this.state
    return(
      <div className="py-5 bg-light">
        <div className="container">
          <h1>Búsqueda > "{text}" en Series</h1>
          <div className="filters-bar">
            <div className="filters-bar-left">
              <a href="busqueda-peliculas-grid.html" className="btn btn-outline-dark">Películas (2)</a>
              <a href="busqueda-series-grid.html" className="btn btn-outline-dark active">Series (2)</a>
            </div>
            <div className="filters-bar-right">
              <a href="#" className="btn btn-light active" aria-label="Profile">
                <i className="mdi mdi-view-grid" aria-hidden="true"></i>
              </a>
              <a href="#" className="btn btn-light" aria-label="Profile">
                <i className="mdi mdi-view-list" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <section className="items-section">
            <div className="items-section-body">
              <div className="row">
                <article className="col-md-2">
                  <a href="detalle.html" className="grid-item">
                    <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                    <span className="grid-item-body">
                      <span className="grid-item-title">Thor: Ragnarok</span>
                      <span className="grid-item-date">October 25, 2017</span>
                    </span>
                  </a>
                </article>
                <article className="col-md-2">
                  <a href="detalle.html" className="grid-item">
                    <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
                      <span className="grid-item-body">
                        <span className="grid-item-title">Thor: Ragnarok</span>
                        <span className="grid-item-date">October 25, 2017</span>
                      </span>
                    </a>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Busqueda;
