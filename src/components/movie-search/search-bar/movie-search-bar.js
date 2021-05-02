import { movieSearch } from '../../../services/omdbAPI/movie-search';

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
    <div onSubmit={handleClick}>
      <form>
        <label>
          <span className='visually-hidden'>Search Movie: </span>
        </label>
        <input type='text' value={searchTerm} onChange={term => setSearchTerm(term.target.value)} placeholder='Search here'/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default MovieSearchBar;