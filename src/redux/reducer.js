import { combineReducers } from 'redux';
import moviesSearchReducer from './movies-search/reducer';
import nominationsReducer from './nominations/reducer';

const rootReducer = combineReducers({
  moviesSearch: moviesSearchReducer,
  nominations: nominationsReducer
})

export default rootReducer;