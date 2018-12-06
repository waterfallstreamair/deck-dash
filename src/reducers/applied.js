import * as constants from '../constants/index';
const initialState = [];

const applied = (state = initialState, action) => {
  switch (action.type) {
    case constants.TYPE_APPLIED_USERS_SUCCESS:
      return [...state, ...action.users];
    case constants.TYPE_APPLIED_USERS_REMOVE:
      return state.filter(e => e.login.uuid !== action.user.login.uuid);
    case constants.TYPE_APPLIED_USERS_ADD:
      return [...state, action.user]
    default:
      return state;
  }
};

export default applied;
