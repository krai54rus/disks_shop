import { combineReducers } from 'redux';
import disks from './disks';
import auto from './auto';

const reducers = combineReducers({
  auto,
  disks
});

export default reducers;
