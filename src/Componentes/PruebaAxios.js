import axios from 'axios'

const API_KEY = '8bd42374a45989a00cd13bc15ad622dd';

class PruebaAxios {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: API_KEY,
        language: 'es-AR',
      },
    })
  }

  getPopularMovies = (page = 1) => (
    this.axios.get(`/movie/popular`, {
      params: {page: page}
    })
  );
}

export default PruebaAxios;
