import * as constants from '../constants/index';
const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    
    case constants.TYPE_POSTS_SUCCESS:
      return [...state, ...action.posts];
      
    case constants.TYPE_COMMENTS_SUCCESS:
      return state.map(e => 
        e.id === action.post.id ? { ...e, comments: action.comments } : e
      );
      
    case constants.TYPE_COMMENTS_REMOVE:
      return state.map(e => 
        e.id === action.post.id ? { ...e, comments: null } : e
      );
      
    default:
      return state;
  }
};

export default posts;
