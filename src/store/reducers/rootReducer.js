import pgReducer from './pgReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  pg: pgReducer,
  firestore: firestoreReducer
});

export default rootReducer