import { nominationActionTypes } from './action';

const nominationsInitialState = {
  nominations: []
};

export default function reducer(state = nominationsInitialState, action) {
  switch(action.type) {

    case nominationActionTypes.ADD_NOMINATION: {
      return {
        ...state,
        nominations: action.nomination,
      };
    }

    case nominationActionTypes.REMOVE_NOMINATION: {
      return {
        ...state,
        nominations: action.nomination,
      };
    }

    default:
      return state;
  }
}