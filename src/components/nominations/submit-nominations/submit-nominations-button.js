import styles from './submit-nominations-button.module.css';

const SubmitNominationsButton = ({
  onClick,
  disabled
}) => {
  const clickHandler = () => {
    onClick();
  }

  return(
    <button 
      className={styles.buttonContainer} 
      onClick={clickHandler} 
      disabled={disabled}
    >
      Submit Nominations!
    </button>
  )
}

export default SubmitNominationsButton;