import React from 'react';
import styles from './movie-result-tiles.module.css';
import NominateButton from '../../../nominations/nominate-button/nominate-button';

const MovieResultTiles = ({   
  title, 
  year,
  imageURL,
  movie,
  onFinshedNominations
}) => {
  return (  
    <div className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <img className={styles.image} src={imageURL}/>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.year}>{year}</h2>
        </div>
        <div className={styles.buttonContainer}>
          <NominateButton nomination={movie} onFinshedNominations={onFinshedNominations}/>
        </div>
      </div>
    </div>
  );
};

export default MovieResultTiles;