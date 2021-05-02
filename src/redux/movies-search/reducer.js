import { moviesSearchActionTypes } from './action';
import { parseMovieSearchResponse } from '../../parsers/omdb-movie-parser';

const moviesSearchInitialState = {
  isFetchingMovies: false,
  movieResults: null,
  error: null,
};

export default function reducer(state = moviesSearchInitialState, action) {
  switch(action.type) {
    case moviesSearchActionTypes.FETCH_MOVIES: {
      return {
        ...state,
        isFetchingMovies: true
      };
    }

    case moviesSearchActionTypes.FETCH_MOVIES_SUCCESS: {
      const parsedResponse = parseMovieSearchResponse(action.response);
      return {
        ...state,
        isFetchingMovies: false,
        movieResults: parsedResponse,
        error: null
      };
    }

    case moviesSearchActionTypes.FETCH_MOVIES_FAILED: {
      return {
        ...state,
        isFetchingMovies: false,
        error: action.error,
        movieResults: null
      };
    }

    default:
      return state;
  }
}