import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import loginMethodReducer from './loginMethodReducer'

export default combineReducers({
  loginMethodReducer,
  loginReducer,
  modalReducer,
})