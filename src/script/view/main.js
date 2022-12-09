import '../component/movie-list';
import '../component/search-bar';
import DataSource from '../data/data-source';

const main =  () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');

  console.log("Search Element " + searchElement);
  console.log("Movie Element " + movieListElement);
  const onButtonSearchClicked = async () => { 
    
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      // console.log("Resultnya = "+result);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
      console.log("Error button " + message);
    }
  };

  const renderResult = results => {
    movieListElement.movies = results;
  };


  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;