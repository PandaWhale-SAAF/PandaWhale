import * as types from '../actions/actionTypes';

const initialState = {
    sortType: 'title', //current sort method from MainContainer
    data: [], //Data from MainContainer

    title: '', //createEvent data input field
    date: '',
    startTime: '',
    endTime: '',
    activityType: '',
    numParticipants: '',
    participants: '',
    location: '',
    host: '',
    zip: ''
};

const eventReducer = (state = initialState, action) =>{

  switch (action.type) {

    //ACTIONS FROM CREATE EVENT: FORM UPDATE
    case types.UPDATE_EVENT_TITLE:{ 
      console.log('update event title', action.payload)
      return {
        ...state,
        title: action.payload
      }
    };
    case types.UPDATE_DATE:{ 
      console.log('update event date payload', action.payload)
      return {
        ...state,
        date: action.payload
      }
    };

    case types.SET_TIME_START:{ 
      console.log('update set time start', action.payload)
      return {
        ...state,
        startTime: action.payload
      }
    };

    case types.SET_TIME_END:{ 
      console.log('update set time END', action.payload)
      return {
        ...state,
        endTime: action.payload
      }
    };

    case types.SET_ACTIVITY_TYPE: { 
      console.log('update activity type', action.payload)
      return {
        ...state,
        activityType: action.payload
      }
    };

    case types.SET_NUM_PARTICIPANTS: { 
      console.log('set number of participants', action.payload)
      return {
        ...state,
        numParticipants: action.payload
      }
    };

    case types.SET_LOCATION: { 
      console.log('set location', action.payload)
      return {
        ...state,
        location: action.payload
      }
    };

    case types.SET_HOST_NAME: { 
      console.log('set hostname', action.payload)
      return {
        ...state,
        host: action.payload
      }
    };

    case types.ADD_EVENT: { 
      console.log('ADDING EVENT!', action.payload)
      let newEventData = state.eventData.push(action.payload)
      return {
        ...state,
        ...newEventData
      }
    };
    case types.SET_DATA: { 
      console.log('SET INITIAL DATA REDUCER!')
      return {
        ...state,
        data: action.payload
      }
    };
    case types.SET_SORT_TYPE: { 
      console.log('SET-SORT-TYPE REDUCER')
      
      return {
        ...state,
        sortType: action.payload  
      }
    };
    case types.SET_ZIP: { 
      console.log('SET ZIPCODE')
      return {
        ...state,
        zip: action.payload
      }
    };

    
    // case types.SET_SORT_TYPE:{ //change SORT State: MainContainer

    // }
    // case types.NEW_EVENT: { //a new event has entered. Add this event to EventData 

    // }
    
    default: {
        return state;
    }
  }

};

export default eventReducer;