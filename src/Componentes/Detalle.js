import React, {Component} from 'react'
import Axios from 'axios'

class Detalle extends Component {

  state = {
    datos: [],
    isFetching: false
  }

  componentDidMount () {
    this.fetchCategory(this.props.match.params.tipo, this.props.match.params.id)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.fetchCategory(nextProps.match.params.tipo, nextProps.match.params.id)
    }
  }

  fetchCategory (tipo, id) {
    this.setState({ isFetching: true })
    Axios.get(`/${tipo}/${id}`, { params: {
          api_key: '8bd42374a45989a00cd13bc15ad622dd',
          language: 'es-AR'
        }
      }).then(res => {
        this.setState({
          isFetching: false,
          datos: res.data
        })}
      )
  }

  render(){
    const { isFetching, datos } = this.state
    return (
      isFetching
      ? 'cargando...'
      : <main role="main">
          <div className="py-5 bg-light">
              <div className="container">
                  <section className="detail-section">
                      <div className="row">
                          <div className="col-md-4">
                              <img src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + datos.backdrop_path} alt={datos.title} className="img-fluid" />
                          </div>
                          <div className="col-md-8">
                              <h1>{ this.props.match.params.tipo === 'movie' ? datos.title : datos.name }</h1>
                              <div>
                                  <h3>Overview</h3>
                                  <p>{datos.overview}</p>
                              </div>
                              <br />
                              <br />
                              <br />
                              <div>
                                  <h3>Featured Crew</h3>
                                  <div className="row">
                                      <div className="col-md-4">
                                          <h5>Taika Waititi</h5>
                                          <p>Director</p>
                                      </div>
                                      <div className="col-md-4">
                                          <h5>Taika Waititi</h5>
                                          <p>Director</p>
                                      </div>
                                      <div className="col-md-4">
                                          <h5>Taika Waititi</h5>
                                          <p>Director</p>
                                      </div>
                                      <div className="col-md-4">
                                          <h5>Taika Waititi</h5>
                                          <p>Director</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className="items-section">
                      <h5 className="items-section-title">Recomendaciones</h5>
                      <div className="items-section-body">
                          <div className="row">
                              <article className="col-md-2">
                                  <a href="detalle.html" className="grid-item">
                                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                                      <span className="grid-item-body">
                                          <span className="grid-item-title">Thor: Ragnarok</span>
                                          <span className="grid-item-date">October 25, 2017</span>
                                      </span>
                                  </a>
                              </article>
                              <article className="col-md-2">
                                  <a href="detalle.html" className="grid-item">
                                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                                      <span className="grid-item-body">
                                          <span className="grid-item-title">Thor: Ragnarok</span>
                                          <span className="grid-item-date">October 25, 2017</span>
                                      </span>
                                  </a>
                              </article>
                              <article className="col-md-2">
                                  <a href="detalle.html" className="grid-item">
                                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                                      <span className="grid-item-body">
                                          <span className="grid-item-title">Thor: Ragnarok</span>
                                          <span className="grid-item-date">October 25, 2017</span>
                                      </span>
                                  </a>
                              </article>
                              <article className="col-md-2">
                                  <a href="detalle.html" className="grid-item">
                                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                                      <span className="grid-item-body">
                                          <span className="grid-item-title">Thor: Ragnarok</span>
                                          <span className="grid-item-date">October 25, 2017</span>
                                      </span>
                                  </a>
                              </article>
                              <article className="col-md-2">
                                  <a href="detalle.html" className="grid-item">
                                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
                                      <span className="grid-item-body">
                                          <span className="grid-item-title">Thor: Ragnarok</span>
                                          <span className="grid-item-date">October 25, 2017</span>
                                      </span>
                                  </a>
                              </article>
                              <article className="col-md-2">
                                  <a href="detalle.html" className="grid-item">
                                      <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie" className="img-fluid" />
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
      </main>
    )
  }
}

export default Detalle
