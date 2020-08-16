import { combineReducers } from 'redux';
import fetchTermReducer from './fetchTermReducer';
import createCharacterReducer from './createCharacterReducer';
import createActivePageReducer from './createActivePageReducer';
import createActiveCharacterReducer from './createActiveCharacterReducer';

export default combineReducers({
  term: fetchTermReducer,
  characters: createCharacterReducer,
  activePage: createActivePageReducer,
  activeCharacter:createActiveCharacterReducer,
});