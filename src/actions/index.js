import {find} from 'lodash';
import memory from '../memory-db';

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_SINGLE_IMAGE_NAME = 'FETCH_SINGLE_IMAGE_NAME';

export function getImageNameByCode(code = "0") {
  let imageName = find(memory, { code: code.toString() });
  return {
    type: FETCH_SINGLE_IMAGE_NAME,
    payload: imageName
  }
}

export function fetchImage(term) {
  let promise = new Promise((resolve, reject) => {
    flickr.photos.search({
      text: term,
      per_page: 1
    }, (err, result) => {
      if (err) { reject(err) }
      resolve(result);
    })
  })
}
