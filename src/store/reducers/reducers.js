import { combineReducers } from 'redux';
import disks from './disks';
import auto from './auto';
import cart from './cart';
const reducers = combineReducers({
  auto,
  disks,
  cart
});

export default reducers;
