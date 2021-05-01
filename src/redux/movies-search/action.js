export const moviesSearchActionTypes = {
  FETCH_MOVIES: 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILED: 'FETCH_MOVIES_FAILED',
}

export const fetchMovies = () => (dispatch) => {
  return dispatch({
    type: moviesSearchActionTypes.FETCH_MOVIES
  });
}

export const fetchMoviesSuccess = (response) => (dispatch) => {
  return dispatch({
    type: moviesSearchActionTypes.FETCH_MOVIES_SUCCESS,
    response: response,
  });
}

export const fetchMoviesFailed = (error) => (dispatch) => {
  return dispatch({
    type: moviesSearchActionTypes.FETCH_MOVIES_FAILED,
    error: error,
  });
}