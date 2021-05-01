import styles from './movie-result-list.module.css';
import MovieResultTiles from '../result-tiles/movie-result-tiles';

const MovieResultList = ({
  results,
  onFinshedNominations
}) => {
  let resultsList;
  
  if(results && results.successfulSearch){
    resultsList = results.results.map((result) => {
      <MovieResultTiles 
        title={result.Title} 
        year={result.Year} 
        imageURL={result.Poster} 
        movie={result} 
        onFinshedNominations={onFinshedNominations}
      ></MovieResultTiles>
    }) 
  }else {
    resultsList = <div>No Search Made</div>
  }

  return(
    <div className={styles.mainContainer}>
      {resultsList}
    </div>
  )
}

export default MovieResultList;