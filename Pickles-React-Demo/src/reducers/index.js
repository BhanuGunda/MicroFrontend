import { combineReducers} from 'redux';
import vehicles from './vehicleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  vehicles,
  ajaxCallsInProgress
});

export default rootReducer;
