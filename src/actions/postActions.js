import 'whatwg-fetch';
import * as constants from '../constants/index';

export const getPosts = (options) => async (dispatch) => {
  const res = await fetch(constants.CONST_URL_POSTS, {
    method: 'GET'
  });
  const json = await res.json();
  dispatch({
    type: constants.TYPE_POSTS_SUCCESS,
    posts: json.results
  });
};

