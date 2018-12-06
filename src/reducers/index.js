import { combineReducers } from 'redux'
import applied from './applied'
import interviewing from './interviewing'
import hired from './hired'

export default combineReducers({
  applied,
  interviewing,
  hired
})
