import { removeNomination } from '../../../redux/nominations/action';
import store from '../../../redux/store';

const RemoveNominationButton = ({
  nomination
}) => {
  const clickHandler = (event) => {
    event.preventDefault();
    store.dispatch(removeNomination(nomination));
  }

  return(
    <button onClick={clickHandler}>Remove</button>
  )
}

export default RemoveNominationButton;