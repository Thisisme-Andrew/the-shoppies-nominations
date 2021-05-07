import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import MovieSearchBar from './components/movie-search/search-bar/movie-search-bar';
import MovieResultList from './components/movie-search/search-results/movie-result-list/movie-result-list';
import { movieSearch } from './services/omdbAPI/movie-search';
import NominationList from './components/nominations/nominaton-list/nomination-list';
import SubmitNominationsButton from './components/nominations/submit-nominations/submit-nominations-button';
import PopUpModal from './components/pop-up-modal';
import background from './assets/background.jpg';
import logo from './assets/logo.png';

const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalHeader, setModalHeader] = useState();
  const [modalTitle, setModalTitle] = useState();
  const [modalDescription, setModalDescription] = useState();

  //redux
  const isFetchingMovies = useSelector(state => state.moviesSearch.isFetchingMovies);
  const movieResults = useSelector(state => state.moviesSearch.movieResults);
  const nominations = useSelector(state => state.nominations.nominations);
  const error = useSelector(state => state.moviesSearch.error);

  const totalMovieResults = movieResults ? movieResults.totalResults : null;
  const numOfPages = Math.ceil(totalMovieResults / 10);
  const disablePreviousPage = (pageNumber - 1) < 1;
  const disableNextPage = numOfPages <= pageNumber;
  const disableSubmit = nominations.length !== 5

  const nextPage = () => {
    const nextPageNumber = pageNumber + 1;
    if(!disableNextPage){
      setPageNumber(nextPageNumber);
      movieSearch(searchTerm, nextPageNumber)
    }
  }

  const previousPage = () => {
    const previousPageNumber = pageNumber - 1;
    if(!disablePreviousPage){
      setPageNumber(previousPageNumber);
      movieSearch(searchTerm, previousPageNumber);
    }
  }

  const submitNominations = () => {
    setModalHeader('Nominations Submitted');
    setModalTitle('Congratulations');
    setModalDescription('Thanks for trying out this movie nomination demo, This is the end of the demo :)');
    setShowModal(true);
  }

  const onFinishedNominations = () => {
    setModalHeader('You have finished you nominations');
    setModalTitle('Congratulations');
    setModalDescription('Thanks for trying out this movie nomination demo, This is the end of the demo :)');
    setShowModal(true);
  }

  return (
    <div className={styles.mainContainer} style={{backgroundSize: "cover", backgroundImage: `url(${background})`}}>
      <PopUpModal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        header={modalHeader} 
        title={modalTitle}
        description={modalDescription}
      />
      <div className={styles.header}>
        <img src={logo} className={styles.headerLogo}/>          
        <div className={styles.searchContainer}>
          <MovieSearchBar 
            onSearch={() => setPageNumber(1)} 
            pageNumber={1}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {isFetchingMovies ? <div>Fetching movies!</div> : <div>Results: {totalMovieResults}</div>}
        </div>
      </div>
      <div className={styles.movieDisplayContianer}>
        <div className={styles.searchResultsContainer}>
          <div className={styles.searchResultsHeader}>
            <h2>Movie Search Results:</h2>
              <div>
                <button onClick={previousPage} disabled={disablePreviousPage}>Previous</button>
                <button onClick={nextPage} disabled={disableNextPage}>Next page</button>
              </div>
              {error ? <div>{error}</div> : null}
              {movieResults ? <div className={styles.pageNumber}>Page: {pageNumber} / {numOfPages}</div> : null}
            </div>
          <div className={styles.movieListContainer}>
            {error ? null : <MovieResultList results={movieResults} onFinshedNominations={onFinishedNominations}/>}
          </div>
          {movieResults ? 
            <div className={styles.changePageUI}>
              <button onClick={previousPage} disabled={disablePreviousPage}>Previous</button>
              <button onClick={nextPage} disabled={disableNextPage}>Next page</button>
              <div>Page: {pageNumber} / {numOfPages}</div>
            </div> 
            : null
          }
        </div>
        <div className={styles.nominationListContainer}>
          <h2>Nominations</h2>
          <NominationList nominations={nominations}/>
          <div>{nominations.length}/5</div>
          <SubmitNominationsButton onClick={submitNominations} disabled={disableSubmit}/>
        </div>
      </div>
    </div>
  )
}

export default App;
