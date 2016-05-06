import {
  FETCH_SINGLE_IMAGE_NAME,
  PHOTO_FETCHED
}
from '../actions/';

const defaultState = {
  item: {},
  imageUrl: ""
}
export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_SINGLE_IMAGE_NAME:
      return Object.assign({}, state, {
        item: action.payload
      });
    case PHOTO_FETCHED:
      return Object.assign({}, state, {
        imageUrl: action.payload
      });
    default:
      return state;
  }
}
