import axios from 'axios'

const API_KEY = '1e8afe432c9303fee939ee7f7e0cfa5c';

class TheMovieDbApi {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: API_KEY,
        language: 'es-AR',
      },
    })
  }

  getMovie = ( id ) => (
    this.axios.get(`/movie/`+parseInt(id,10))
  );

  findMovie = ( title ) => (
    this.axios.get(`/search/movie`, {
      params: {query: title}
    })
  );

  getPopularMovies = (page = 1) => (
    this.axios.get(`/movie/popular`, {
      params: {page: page}
    })
  );
}

export default TheMovieDbApi;