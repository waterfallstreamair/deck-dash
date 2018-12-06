import * as constants from '../constants/index';
const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    
    case constants.TYPE_POSTS_SUCCESS:
      console.log({ action })
      return [...state, ...action.posts];
      
    case constants.TYPE_COMMENTS_SUCCESS:
      console.log({ action })
      const { post, comments } = action;
      return state.map(e => 
        e.id === post.id ? { ...e, comments } : e
      );
      
    default:
      return state;
  }
};

export default posts;
