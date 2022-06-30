import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';

import { useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreator from './actions/actions.js';

//class App extends Component {
export default function EventBox ({info, onComment, onSignUp, onViewParticipants}){

  // const [nameX, setName] = useState('');
  //redux retrieve state from event
  const nameX = useSelector((state) => state.event.host);
  const dispatch = useDispatch();
  const { setName } = bindActionCreators(actionCreator, dispatch);

  
  function handleSubmit() {
  const obj = {name:nameX,
              id: info.id}
              console.log(obj)

  fetch('http://localhost:3000/home/signUp', {
      method: 'PATCH',
      headers: {
                  'Content-Type': 'application/json',
                    // x-www-form-urlencoded
                },
      body: JSON.stringify(obj),
      })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(console.log("Error in fetch PATCH to /signUp"))
  }


  return (

      <div className='eventBox'>
        {/* <h2>Date: {info.name}</h2>
        <h2>Activity: {info.number}</h2>
        <h2>Start: {info.amount}</h2>
        <h2>End: {info.due}</h2> */}
        
        <h2>Title: {info.title}</h2>
        <h2>Activity: {info.activity_type}</h2>
        <h2>Date: {info.date}</h2>
        <h2>Start: {info.start_time} - {info.end_time}</h2>
        <h2>Location: {info.location}</h2>
        {/* <h2>Number of Participants: {info.num_participants}</h2> */}
        <h2>Sign up list: {info.participants}</h2>

        {/* <button id = 'commentButton' onClick={() => {
            onComment(alert('hello'))
        }}>Comment</button> */}
        
        <button id = 'signupEventButton' onClick={() => {
            handleSubmit()
            alert("Successfully submitted")
        }}>Sign up for event</button>

        <input id='signUpInput' placeholder='Enter your name!' onChange = {e => {
          setName(e.target.value)
          }}/>
      </div>
  )
}

    // CREATE TABLE events (
    //     id SERIAL PRIMARY KEY,
    //     title varchar,
    //     date DATE,
    //     start_time TIME,
    //     end_time TIME,
    //     activity_type varchar,
    //     num_participants int DEFAULT 1,
    //     zip int,
    //     participant_id int,
    //     comment_id int
    // )
    