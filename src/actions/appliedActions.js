import 'whatwg-fetch';
import * as constants from '../constants/index';

export const getApplied = () => async (dispatch) => {
  const res = await fetch(constants.CONST_URL_APPLIED, {
    method: 'GET'
  });
  const json = await res.json();
  dispatch({
    type: constants.TYPE_APPLIED_USERS_SUCCESS,
    users: json.results
  });
};

export const removeApplied = (options) => async (dispatch) => {
  const { user } = options;
  dispatch({
    type: constants.TYPE_APPLIED_USERS_REMOVE,
    user
  });
};

export const addApplied = (options) => async (dispatch) => {
  const { user } = options;
  dispatch({
    type: constants.TYPE_APPLIED_USERS_ADD,
    user
  });
};
