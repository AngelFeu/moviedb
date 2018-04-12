import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import ViewedItems from '../ViewedItems'
import Select from '../Select'
import Button from '../Button'
import Loading from '../Loading'

const Home = ({ homePeliculas, isHomePeliculasFetching, isHomePeliculasFetched, HomePeliculaserror, homeSeries, isHomeSeriesFetching, isHomeSeriesFetched, HomeSerieserror, homeMiLista, isHomeMiListaFetching, isHomeMiListaFetched, HomeMiListaerror }) => {
  return (
    <div>
      <main role="main">
        <div className="py-5 bg-light">
          <div className="container">
            <section className="items-section">
              <h5 className="items-section-title">Mi Lista <NavLink to="/milista">Ver todas</NavLink></h5>
              <div className="items-section-body">
                {isHomeMiListaFetching && homeMiLista.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
                {isHomeMiListaFetched && homeMiLista.length === 0 ? <Loading Title="" Texto="No hay items para mostrar" Mostrar="1" /> : ''}
                {HomeMiListaerror ? <Loading Title="" Texto="Error al obtener los items" Mostrar="1" /> : ''}
                {isHomeMiListaFetched && homeMiLista.length > 0 ? <ViewedItems Items={homeMiLista} Tipo='milista' /> : ''}
              </div>
            </section>
            <section className="items-section">
              <h5 className="items-section-title">Películas más Populares <NavLink to="/peliculas">Ver todas</NavLink></h5>
              <div className="items-section-body">
                {isHomePeliculasFetching && homePeliculas.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
                {isHomePeliculasFetched && homePeliculas.length === 0 ? <Loading Title="" Texto="No hay peliculas para mostrar" Mostrar="1" /> : ''}
                {HomePeliculaserror ? <Loading Title="" Texto="Error al obtener las peliculas" Mostrar="1" /> : ''}
                {isHomePeliculasFetched && homePeliculas.length > 0 ? <ViewedItems Items={homePeliculas} Tipo='movie' /> : ''}
              </div>
            </section>
            <section className="items-section">
              <h5 className="items-section-title">Series más Populares <NavLink to="/series">Ver todas</NavLink></h5>
              <div className="items-section-body">
                {isHomeSeriesFetching && homeSeries.length === 0 ? <Loading Title="" Texto="" Mostrar="2" /> : ''}
                {isHomeSeriesFetched && homeSeries.length === 0 ? <Loading Title="" Texto="No hay series para mostrar" Mostrar="1" /> : ''}
                {HomeSerieserror ? <Loading Title="" Texto="Error al obtener las series" Mostrar="1" /> : ''}
                {isHomeSeriesFetched && homeSeries.length > 0 ? <ViewedItems Items={homeSeries} Tipo='tv' /> : ''}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default connect()(Home)
