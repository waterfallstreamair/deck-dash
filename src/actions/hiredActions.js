import 'whatwg-fetch';
import * as constants from '../constants/index';

export const addHired = (options) => async (dispatch) => {
  const { user } = options;
  dispatch({
    type: constants.TYPE_HIRED_USERS_ADD,
    user
  });
};

export const removeHired = (options) => async (dispatch) => {
  const { user } = options;
  dispatch({
    type: constants.TYPE_HIRED_USERS_REMOVE,
    user
  });
};
