export const parseMovieSearchResponse = (response) => {
  if(!response) {
    return null;
  }else if(response.data.Response === 'False') {
    return {successfulSearch: false};
  }
  
  const moviesResults = response.data.Search;
  const numMoviesFound = response.data.totalResults;
  const successfulSearch = true;

  return {results: moviesResults, successfulSearch: successfulSearch, totalResults: numMoviesFound};
}