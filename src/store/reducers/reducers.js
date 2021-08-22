import { combineReducers } from 'redux';
import disks from './disks';
import auto from './auto';
import cart from './cart';
import personal from './personal';
const reducers = combineReducers({
  auto,
  disks,
  cart,
  personal
});

export default reducers;
