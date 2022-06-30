import React from 'react';
import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actionCreator from '../actions/actions.js';


// const selectedData = useSelector(selectorReturningObject, shallowEqual)

// console.log('nameX', nameX)
// const titleX = useSelector((state) => state.event.nameX);
// const dateX = useSelector((state) => state.event.nameX);
// const timeStart = useSelector((state) => state.event.nameX);
// const timeEnd = useSelector((state) => state.event.nameX);
// const activityType = useSelector((state) => state.event.nameX);
// const numParticipants = useSelector((state) => state.event.nameX);
// const locationX = useSelector((state) => state.event.nameX);


export default function createEvent() {

  const eventState = useSelector((state) => state.event);
  // console.log('nameX state!!!', eventState)
  const {
    title, 
    date,
    startTime,
    endTime,
    activityType,
    numParticipants,
    participants,
    location,
    host,
    zip
  } = eventState

const dispatch = useDispatch();
const { setZip, addEvent, setTitle, setName, setDate, setTimeStart, setTimeEnd, setActivity_type, setNumParticipants, setLocation} = bindActionCreators(actionCreator, dispatch)

function handleSubmit () {

  const obj = {
    title: title,
    date: date,
    start_time: startTime,
    end_time: endTime,
    activity_type: activityType,
    num_participants: numParticipants,
    participants: host,
    location: location,
    hostName: host,
    zip: zip,
    created_by_id: 28
    };

    // req.body.title, req.body.date, req.body.start_time, req.body.end_time, 
    // req.body.activity_type, req.body.num_participants, req.body.zip, 
    // req.body.location, req.body.created_by_id

  fetch('http://localhost:3000/createEvent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // x-www-form-urlencoded
    },
    body: JSON.stringify(obj),
    })
    .then(response => { 
      console.log('CHECK STATUS: ', response.status)
      if (response.status===200){
        addEvent(obj);
      }
    })
    .then((data) =>{
      console.log(data)
    })
    .catch(console.log("Error in fetch POST to /createEvent"))
  
  console.log(obj);

}

    return(
    <main>
      <div id = "eventContainer">
         <h1>Create Event Page</h1>
         <label className='eventLabel'>Host name: &nbsp;</label> 
         <input id = "eventFields" onChange = {e => setName(e.target.value)} />
      <div>
        <label className='eventLabel'>Event title: &nbsp;</label> 
        <input id = "eventFields" onChange = {e => setTitle(e.target.value)} />
      </div>
      <div>
        <label className='eventLabel'>Location: &nbsp;</label> 
        <input id = "eventFields" onChange = {e => setLocation(e.target.value)} />
      </div>

      <div>
       <label className='eventLabel'>Date: &nbsp;</label> 
       <input id = "eventFields" placeholder='YYYY-MM-DD' onChange = {e => setDate(e.target.value)} />
      </div>
      <div>
       <label className='eventLabel'>Time Start: &nbsp;</label> 
       <input id = "eventFields" placeholder='E.g. 13:00' onChange = {e => setTimeStart(e.target.value)} />

       <label className='eventLabel'>Time End: &nbsp;</label> 
       <input id = "eventFields" placeholder='E.g. 15:00' onChange = {e => setTimeEnd(e.target.value)} />
      </div>
      <div>
       <label className='eventLabel'>Activity Type: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setActivity_type(e.target.value)} />
      </div>
      <div>
       <label className='eventLabel'>Zip Code: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setZip(e.target.value)} />
      </div>
      <div>
       <label className='eventLabel'>Max number participants: &nbsp;</label> 
       <input id = "eventFields" onChange = {e => setNumParticipants(e.target.value)} />
      </div>
      <div>
       <button id = "submitButton" onClick = {() => { alert("Successfully submitted")
       handleSubmit()}}>Create Event!</button>
      </div>
      </div>
    </main>
    )
};
