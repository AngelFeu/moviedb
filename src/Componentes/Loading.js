import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ Title, Mostrar, Texto }) => {
  return (
    <section className="items-section">
      {Title !== '' ? <h5 className="items-section-title">Películas más Populares <a href="">Ver todas</a></h5> : ''}
      <div className="items-section-body">
        <div className="dimmer">
          {Mostrar === "1" ? Texto : ''}
          {Mostrar === "2"
            ? <div className="loading">
                <i className="mdi mdi-loading" aria-hidden="true"></i>
              </div>
            : ''
          }
        </div>
      </div>
    </section>
  )
}

export default Loading
