import React from 'react'
import PropTypes from 'prop-types'
import GridItem from './GridItem'

const ViewedItems = ({ Items, Tipo, title }) => {
    return (
      <section className="items-section">
        {title ? <h5 class="items-section-title">Recomendaciones</h5> : ''}
        <div className="items-section-body">
          <div className="row">
            {Items.map(function(item, i){
              if(i < 6){
                return(
                  <GridItem
                    key={item.id}
                    Id={item.id}
                    Type={ Tipo === 'milista' ? item.tipo : Tipo }
                    Name={ Tipo === 'movie' ? item.title : item.name }
                    Date={ Tipo === 'movie' ? item.release_date : item.first_air_date }
                    Img={item.backdrop_path}
                  />
                )
              }
            })}
          </div>
        </div>
      </section>
    );
}

ViewedItems.propTypes = {
  Items : PropTypes.array.isRequired,
  // Items : PropTypes.arrayOf(
  //   PropTypes.shape(
  //     name: PropTypes.string.isRequired,
  //     image: PropTypes.string.isRequired,
  //   )
  // ).isRequired,
  Vista : PropTypes.oneOf(['grid', 'list']),
  Tipo : PropTypes.oneOf(['movie', 'tv', 'milista']),
}

ViewedItems.defaultProps = {
  Items : [],
  Vista : "grid",
}

export default ViewedItems
