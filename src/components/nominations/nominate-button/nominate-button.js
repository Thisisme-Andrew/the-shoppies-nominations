import { useSelector } from 'react-redux';
import { addNomination } from '../../../services/nominations/add-nomination';

const NominateButton = ({
  nomination,
  onFinshedNominations
}) => {
  const currentNominations = useSelector(state => state.nominations.nominations);

  const preventNomination = () => {
    const nominationID = nomination.imdbID;
    for(let i = 0; i < currentNominations.length; i++){
      if(nominationID === currentNominations[i].imdbID){
        return true;
      }
    }
    return false;
  }

  const clickHandler = (event) => {
    event.preventDefault();
    addNomination(nomination, currentNominations);
    if(currentNominations.length + 1 === 5){
      onFinshedNominations();
    }
  }

  return (
    <button onClick={clickHandler} disabled={preventNomination()}>Nominate</button>
  )
}

export default NominateButton;