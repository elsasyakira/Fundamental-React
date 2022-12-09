
// // const axios = require('axios');
import axios from 'axios';

    const BASE_URL = `https://api.themoviedb.org/3`
    const api_key = '3e299604216b33593684e01976c399c7'
    const language = 'id-ID'
    const query = 'a';

    let movies = [];

    const api = axios.create({ baseURL: BASE_URL });

    const Movies = api.get("/search/movie", { params: { api_key,language, query } });

    Movies.then(response => {
      for (let i = 0; i < response.data.results.length; i++){
        movies[i] = response.data.results[i];
      }
    });
    console.log(movies);

export default movies