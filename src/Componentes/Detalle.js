import React, {Component} from 'react'
import { connect } from 'react-redux'
import ViewedItems from './ViewedItems'
import Loading from './Loading'
import Axios from 'axios'

class Detalle extends Component {
  constructor({ match }) {
    super({ match })
    this.state = {
      tipo: match.params.tipo,
      id: match.params.id,
      datos: [],
      isFetching: false
    }
  }

  componentDidMount () {
    const { tipo, id } = this.state
    this.fetch(tipo, id)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.fetch(nextProps.match.params.tipo, nextProps.match.params.id)
    }
  }

  fetch (tipo, id) {
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
    const { isFetching, datos, tipo, homePeliculas, homeSeries } = this.state
    return (
      isFetching
      ? <Loading Title="" Texto="" Mostrar="2" />
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
              {/* {tipo === 'movie' && homePeliculas.length > 0 ? <ViewedItems Items={homePeliculas} Tipo='movie' /> : ''}
              {tipo === 'tv' && homeSeries.length > 0 ? <ViewedItems Items={homeSeries} Tipo='tv' /> : ''} */}
            </div>
          </div>
        </main>
    )
  }
}

export default connect()(Detalle)
