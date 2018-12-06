import { combineReducers } from 'redux'
import applied from './applied'
import interviewing from './interviewing'
import hired from './hired'

import posts from './posts'

export default combineReducers({
  applied,
  interviewing,
  hired,
  
  posts
})
