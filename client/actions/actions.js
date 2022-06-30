import * as types from './actionTypes.js';

// export const setNewLocation = (location) => ({
//   type: types.SET_NEW_LOCATION,
//   payload: location,
// });

export const logIn = (user_id) => ({
  type: types.LOG_IN,
  payload: user_id,
});
export const setTitle = (title) => ({
  type: types.UPDATE_EVENT_TITLE,
  payload: title,
});

export const setDate = (date) => ({
  type: types.UPDATE_DATE,
  payload: date,
});

export const setTimeStart = (time) => ({
  type: types.SET_TIME_START,
  payload: time,
});

export const setTimeEnd = (time) => ({
  type: types.SET_TIME_END,
  payload: time,
});

export const setActivity_type = (type) => ({
  type: types.SET_ACTIVITY_TYPE,
  payload: type,
});

export const setNumParticipants = (num) => ({
  type: types.SET_NUM_PARTICIPANTS,
  payload: num,
});

export const setLocation = (location) => ({
  type: types.SET_LOCATION,
  payload: location,
});

export const setName = (name) => ({
  type: types.SET_HOST_NAME,
  payload: name,
});

export const addEvent = (event) => ({
  type: types.ADD_EVENT,
  payload: event,
});

export const setData = (data) => ({
  type: types.SET_DATA,
  payload: data,
});

export const setSortType = (type) => ({
  type: types.SET_SORT_TYPE,
  payload: type,
});

//   const [nameX, setName] = useState('');
