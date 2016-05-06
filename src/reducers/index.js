import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ImagesReducer from './reducer_images';

const rootReducer = combineReducers({
  images: ImagesReducer,
  routing: routerReducer
});

export default rootReducer;
