import store from '../../redux/store';
import { fetchMoviesSuccess, fetchMoviesFailed, fetchMovies } from '../../redux/movies-search/action';
import { ROOT_URL, API_KEY, TYPE_MOVIE } from './constants';
import axios from 'axios';

export const movieSearch = (title, pageNumber) => {
  store.dispatch(fetchMovies());

  axios.get(ROOT_URL, {params: {s: title, type: TYPE_MOVIE, page: pageNumber, apikey: API_KEY}})
    .then(response => {
      if(response.data.Error) {
        store.dispatch(fetchMoviesFailed(response.data.Error));
      }else {
        store.dispatch(fetchMoviesSuccess(response));  
      }
    })
    .catch(error =>  {
      store.dispatch(fetchMoviesFailed(error.response));
    })
}
