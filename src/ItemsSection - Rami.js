import React, { Component } from 'react';
import TheMovieDbApi from '../../MoviesAPI'
import GridItem from '../GridItem/GridItem';
import ListItem from '../ListItem/ListItem'

class ItemSection extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      movies: [],
      error: null,
      type: "grid"
    };
      this.api = new TheMovieDbApi()
  }

  componentDidMount() {
    this.setState({ loading: true, error: null });
    this.api.getPopularMovies(3)
    .then()
    .then(res => {
      this.setState({
        loading: false,
        error: null,
        movies: res.data.results
      });
    })
    .catch((error) => {
      this.setState({ loading: false, error: error, movies: []});
    })
  }

  render(){

    const {loading,error,movies,type} = this.state
    const listMovies = movies.map((movie) => {
        if(type==="grid"){
         return (
          <GridItem
            key={movie.id}
            imgSrc={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+movie.poster_path}
            title={movie.original_title} release={movie.release_date}
          />)
        }else{
          return (
          <ListItem
            key={movie.id}
            title={movie.original_title}
            description={movie.overview}
            imgSrc={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/"+movie.poster_path}
          />)
        }
      }
    );

    return(
      <div className="row">
        {loading && <div>Loading...</div>}
        {!!error && <div>{error}</div>}
        {!!movies.length && listMovies}
      </div>
    )
  }
}

export default ItemSection
