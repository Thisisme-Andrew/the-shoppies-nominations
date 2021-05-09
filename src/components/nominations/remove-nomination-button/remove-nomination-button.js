import styles from './remove-nominations-button.module.css';
import { removeNomination } from '../../../redux/nominations/action';
import store from '../../../redux/store';
import { FaTrashAlt } from "react-icons/fa";

const RemoveNominationButton = ({
  nomination
}) => {
  const clickHandler = (event) => {
    event.preventDefault();
    store.dispatch(removeNomination(nomination));
  }

  return(
    <div className={styles.trashButtonContainer} onClick={clickHandler}>
      <FaTrashAlt/>
    </div>
    // <button onClick={clickHandler}>Remove</button>
  )
}

export default RemoveNominationButton;