//import { Component } from 'react';
import axios from 'axios';

class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://api.themoviedb.org/3',
      params: {
        api_key: '8bd42374a45989a00cd13bc15ad622dd',
        language: 'es-AR',
      },
    })
  }

  getPopularMovies = (page = 1) => (
    this.axios.get(`/movie/popular`, { params: {page: page} }).then(response => {
      return response;
    })
  )

  getMovie = (id) => (
    this.axios.get(`/movie/${id}`).then(response => {
      return response;
    })
  )

  findMovie = (movieName) => (
    this.axios.get(`/movie/${movieName}`).then(response => {
      return response;
    })
  )

  getPopularTVs = (page = 1) => (
    this.axios.get(`/tv/popular`, { params: {page: page} }).then(response => {
      return response;
    })
  )

  getTV = (id) => (
    this.axios.get(`/tv/${id}`).then(response => {
      return response;
    })
  )

  findTV = (tvName) => (
    this.axios.get(`/movie/${tvName}`).then(response => {
      return response;
    })
  )

// esta llamada es para la funcion del otro lado donde va a trabajar los datos
// es otra forma de usar el .then
  // async function pruebaAsyncAwait() {
  //   try {
  //     const items = await getApi();
  //     console.log(items)
  //   } catch(e) {
  //     console.log("a ocurrido un problema")
  //   }
  // }
  // pruebaAsyncAwait()
}

export default Api;
