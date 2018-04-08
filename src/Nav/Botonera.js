import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// solo para class -- en const no funciona
//@withRouter
class Botonera extends Component {
  constructor () {
    super()
    this.state = {
      buscar: ''
    }
  }

  handleOnChange = (event) => {
    this.setState({
      buscar: event.target.value
    })
  }

  handleOnKeyUp = (event) => {
    event.preventDefault()
    if (event.which === 13 || event.keyCode === 13) {
      const { history } = this.props
      const { buscar } = this.state
      history.push(`/busqueda/${buscar}`) // redirect
    }
  }

  render() {
    const { cantidadMiLista } = this.props
    const { buscar } = this.state

    return (
      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{className:'active'}} exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{className:'active'}} to="/peliculas">Peliculas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{className:'active'}} to="/series">Series</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeStyle={{className:'active'}} to="/milista">Mi Lista
                <span className="badge badge-danger">{cantidadMiLista}</span>
              </NavLink>
            </li>
        </ul>
        <form className="form-inline my-2 my-md-0" onSubmit={e => { e.preventDefault(); }}>
          <input className="form-control" value={buscar} onKeyUp={this.handleOnKeyUp} onChange={this.handleOnChange} type="text" placeholder="Buscar Película o Serie" aria-label="Search" />
        </form>
      </div>
    )
  }
}

export default connect(state => {
  return {
    cantidadMiLista: state.milista.cantidadMiLista
  }
})(withRouter(Botonera));
