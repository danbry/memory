import {
  FETCH_SINGLE_IMAGE_NAME
}
from '../actions/';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_IMAGE_NAME:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
