require("flickrapi/browser/flickrapi.dev.js");
const flickr = new Flickr({
  api_key: '230574817be4429024db23ff4c768009'
});
import {find} from 'lodash';
import memory from '../memory-db';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_SINGLE_IMAGE_NAME = 'FETCH_SINGLE_IMAGE_NAME';
export const PHOTO_FETCHED = 'PHOTO_FETCHED';

export function getImageNameByCode(code = "0") {
  let imageName = find(memory, { code: code.toString() });
  return {
    type: FETCH_SINGLE_IMAGE_NAME,
    payload: imageName
  }
}

function getImageUrl(image) {
  let { farm, id, server, secret } = image;
  return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
}

function sendPhotoToSomething(photo) {
  return {
    type: PHOTO_FETCHED,
    payload: photo
  }
}

export function fetchImage(term) {
  console.log(term);
  return (dispatch, getState) => {
    flickr.photos.search({
      text: term,
      per_page: 1
    }, (err, result) => {
      dispatch(sendPhotoToSomething(getImageUrl(result.photos.photo[0])));
    });
  }
}
