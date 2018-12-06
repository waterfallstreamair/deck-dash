import 'whatwg-fetch';
import * as constants from '../constants/index';

export const addInterviewing = (options) => async (dispatch) => {
  const { user } = options;
  dispatch({
    type: constants.TYPE_INTERVIEWING_USERS_ADD,
    user
  });
};

export const removeInterviewing = (options) => async (dispatch) => {
  const { user } = options;
  dispatch({
    type: constants.TYPE_INTERVIEWING_USERS_REMOVE,
    user
  });
};
