import * as constants from '../constants/index';

export const getPosts = (options) => async (dispatch) => {
  const res = await fetch(constants.CONST_URL_POSTS, {
    method: 'GET'
  });
  const json = await res.json();
  dispatch({
    type: constants.TYPE_POSTS_SUCCESS,
    posts: json.slice(0, 10)
  });
};

export const getComments = (options) => async (dispatch) => {
  const { post } = options;
  const url = constants.CONST_URL_COMMENTS.replace('{post_id}', post.id);
  console.log({ url });
  const res = await fetch(url, {
    method: 'GET'
  });
  const json = await res.json();
  dispatch({
    type: constants.TYPE_COMMENTS_SUCCESS,
    post,
    comments: json
  });
};

export const removeComments = (options) => async (dispatch) => {
  const { post } = options;
  dispatch({
    type: constants.TYPE_COMMENTS_REMOVE,
    post
  });
};