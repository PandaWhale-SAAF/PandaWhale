import * as types from './actionTypes.js';

// export const setNewLocation = (location) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: location,
// });

export const logIn = (user_id) => ({
  type: types.LOG_IN,
  payload: user_id,
});
