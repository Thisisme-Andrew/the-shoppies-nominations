import submitImage from'../../../assets/submitButton.png';
import styles from './submit-button.module.css';

const SubmitButton = ({
  onClick,
  text
}) => {
  return (
    <div className={styles.submitButtonContainer} onClick={onClick}>
      <div className={styles.submitButtonText}>{text}</div>
      <img className={styles.submitButtonImage} src={submitImage}/>
    </div>
  )
}

export default SubmitButton;