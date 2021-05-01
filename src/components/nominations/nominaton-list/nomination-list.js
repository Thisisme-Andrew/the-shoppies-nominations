import styles from './nomination-list.module.css';
import RemoveNominationButton from '../remove-nomination-button/remove-nomination-button';

const NominationList = ({
  nominations,
}) => {
  let nominationList; 

  if(nominations && nominations !== []){
    nominationList = nominations.map((nomination) => <li className={styles.nominations}>{nomination.Title}<div className={styles.removeButton}><RemoveNominationButton nomination={nomination}/></div></li>);
    
  }else {
    nominationList = <div>No nomination nominated</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <ul>
        {nominationList}
      </ul>
    </div>
  )
}

export default NominationList;