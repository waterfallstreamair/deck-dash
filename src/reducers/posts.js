import * as constants from '../constants/index';
const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case constants.TYPE_POSTS_SUCCESS:
      console.log({ action })
      return [...state, ...action.posts];
    default:
      return state;
  }
};

export default posts;
