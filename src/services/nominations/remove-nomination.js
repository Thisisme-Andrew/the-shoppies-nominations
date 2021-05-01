import store from '../../redux/store';
import { addNominations } from '../../redux/nominations/action';

export const removeNomination = (nomination, currentNominations) => {
  const updatedNominations = [...currentNominations];
  
  for(let i = 0; i < currentNominations.length; i++) {
    const nominationID = nomination.imdbID
    if(nominationID === currentNominations[i].imdbID){
      updatedNominations.splice(i, 1);
    }
  }

  store.dispatch(addNominations(updatedNominations));
}