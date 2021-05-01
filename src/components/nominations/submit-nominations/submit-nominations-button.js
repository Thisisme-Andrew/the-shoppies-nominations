const SubmitNominationsButton = ({
  onClick,
  disabled
}) => {
  const clickHandler = () => {
    onClick();
  }

  return(
    <button onClick={clickHandler} disabled={disabled}>Submit Nominations!</button>
  )
}

export default SubmitNominationsButton;