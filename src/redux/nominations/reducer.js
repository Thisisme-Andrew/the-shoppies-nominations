import { nominationActionTypes } from './action';

const nominationsInitialState = {
  nominations: []
};

export default function reducer(state = nominationsInitialState, action) {
  switch(action.type) {

    case nominationActionTypes.ADD_NOMINATION: {
      const updatedNominations = [...state.nominations, action.nomination]
      return {
        ...state,
        nominations: updatedNominations,
      };
    }

    case nominationActionTypes.REMOVE_NOMINATION: {
      const updatedNominations = state.nominations.filter(nomination => nomination.imdbID !== action.nomination.imdbID)
      return {
        ...state,
        nominations: updatedNominations,
      };
    }

    default:
      return state;
  }
}