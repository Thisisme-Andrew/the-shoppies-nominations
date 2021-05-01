import { useSelector } from 'react-redux';
import { removeNomination } from '../../../services/nominations/remove-nomination';

const RemoveNominationButton = ({
  nomination
}) => {
  const currentNominations = useSelector(state => state.nominations.nominations);

  const clickHandler = (event) => {
    event.preventDefault();
    removeNomination(nomination, currentNominations);
  }

  return(
    <button onClick={clickHandler}>Remove</button>
  )
}

export default RemoveNominationButton;