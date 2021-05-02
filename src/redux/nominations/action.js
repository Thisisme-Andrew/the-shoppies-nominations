export const nominationActionTypes = {
  ADD_NOMINATION: 'ADD_NOMINATION',
  REMOVE_NOMINATION: 'REMOVE_NOMINATION',
}

export const addNomination = (nomination) => (dispatch) => {
  return dispatch({
    type: nominationActionTypes.ADD_NOMINATION,
    nomination: nomination,
  });
}

export const removeNomination = (nomination) => (dispatch) => {
  return dispatch({
    type: nominationActionTypes.REMOVE_NOMINATION,
    nomination: nomination,
  });
}