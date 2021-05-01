import store from '../../redux/store';
import { addNominations } from '../../redux/nominations/action';
import { MAX_NOMINATIONS } from './constants';

export const addNomination = (nomination, currentNominations) => {
  const updatedNominations = [...currentNominations];
  updatedNominations.push(nomination);

  if(currentNominations.length < MAX_NOMINATIONS){
    store.dispatch(addNominations(updatedNominations));
  }else {

  }
}