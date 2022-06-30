import * as types from '../actions/actionTypes.js';

const initialState = {
  user_id: '',
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN: {
      return {
        ...state,
        user_id: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
