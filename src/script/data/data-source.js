import movies from "./movies";

class DataSource {
  static searchMovie(keyword) {
    return new Promise((resolve, reject) => {
      const filteredMovies = movies.filter(movie => movie.title.toUpperCase().includes(keyword.toUpperCase()));
      console.log("FiltMov " + filteredMovies);
          if (filteredMovies.length) {
        resolve(filteredMovies);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;