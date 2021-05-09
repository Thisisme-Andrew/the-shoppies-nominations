import { movieSearch } from '../../../services/omdbAPI/movie-search';
import SubmitButton from '../../ui/submit-button/submit-button'
import styles from './movie-search-bar.module.css';

const MovieSearchBar = ({
  onSearch,
  pageNumber,
  searchTerm,
  setSearchTerm
}) => {

  const handleClick = (event) => {
    movieSearch(searchTerm, pageNumber)
    onSearch();
    event.preventDefault();
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        <span>Search Movie: </span>
      </label>
      <div className={styles.searhBarContainer}>
        <input 
          className={styles.textInput} 
          type='text' 
          value={searchTerm} 
          onChange={term => setSearchTerm(term.target.value)} 
          placeholder='Ex. The Titanic'
        />
        <SubmitButton text={'Search'} onClick={handleClick} type={'submit'}/>
      </div>
    </form>
  )
}

export default MovieSearchBar;