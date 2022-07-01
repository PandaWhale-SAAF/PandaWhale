import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/nav.scss';
import { logIn } from '../actions/actions';
import { useDispatch } from 'react-redux';

const Navbar = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logIn(''));
  }

  return(
  <nav id="nav">
        <Link class="nav-text" to="/">
          Home
        </Link>
        <Link class="nav-text" to="/createEvent">
          Create Event
        </Link>
        <Link class="nav-text" to="/profile">
          My Profile
        </Link>
        {/* <Link id="navSignup" to="/signup">
          Sign up!
        </Link> */}
        <button className='nav-btn' onClick={handleClick}>Logout</button>
      </nav>
  )
}

export default Navbar;