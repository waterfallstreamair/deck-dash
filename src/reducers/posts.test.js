import posts from './posts';
import * as constants from '../constants/index';

describe('reducers', () => {
  describe('posts', () => {
    
    const initialState = [];

    it('should provide the initial state', () => {
      expect(posts(undefined, {})).toEqual(initialState);
    })

    it('should handle TYPE_POSTS_SUCCESS action', () => {
      const post = {
          userId: 1, id: 1, title: 'title', body: 'body'
      };
      expect(posts(initialState, { 
        type: constants.TYPE_POSTS_SUCCESS, posts: [post] 
      })).toEqual([{
        userId: 1, id: 1, title: 'title', body: 'body'
      }]);
    })

    it('should handle TYPE_COMMENTS_SUCCESS action', () => {
      const state = [{
        userId: 1, id: 1, title: 'title', body: 'body'
      }]
      const comment = {
        postId: 1, id: 1, name: 'name', email: 'email', body: 'body'	
      };
      expect(posts(state, { 
        type: constants.TYPE_COMMENTS_SUCCESS, 
        post: state[0], 
        comments: [comment] 
      })).toEqual([{
        ...state[0], comments: [comment] 
      }])
    })
    
    it('should handle TYPE_COMMENTS_REMOVE action', () => {
      const comment = {
        postId: 1, id: 1, name: 'name', email: 'email', body: 'body'	
      };
      const state = [{
        userId: 1, id: 1, title: 'title', body: 'body', comments: [comment]
      }]
      expect(posts(state, { 
        type: constants.TYPE_COMMENTS_REMOVE, 
        post: state[0]
      })).toEqual([{
        ...state[0], comments: null 
      }])
    })
 
  })
})
