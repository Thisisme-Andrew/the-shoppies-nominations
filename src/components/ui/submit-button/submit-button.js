import submitImage from'../../../assets/submitButton.png';
import styles from './submit-button.module.css';

const SubmitButton = ({
  onClick,
  text,
  type,
  disabled,
  style
}) => {

  return (
    <div className={styles.submitButtonContainer} onClick={onClick} type={type} disabled={disabled} style={style}>
      <div className={styles.submitButtonText}>{text}</div>
      <img className={styles.submitButtonImage} src={submitImage}/>
    </div>
  )
}

export default SubmitButton;