import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/Landing_Pad.png';
import styles from '../styles/login-styles.scss';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    console.log('pressed');
    fetch('/login/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON',
      },
      body: JSON.stringify({
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data === 'Success') {
          // update state
        } else {
          window.alert('Incorrect username or password');
        }
      })
      .catch((err) => console.log(err));
  };

  const logInSec = (typeInp = 'text', htmlId, htmlLabel, refVal) => {
    return (
      <div className="log-in-sec">
        <label htmlFor={htmlId}>{htmlLabel}</label>
        <input type={typeInp} id={htmlId} ref={refVal}></input>
      </div>
    );
  };

  return (
    <div>
      <img className="logo" src={Logo} alt="Logo" />
      <div className="log-in-container">
        {logInSec('text', 'username', 'Username: ', usernameRef)}
        {logInSec('password', 'password', 'Password: ', passwordRef)}
        <Link to="/signup">Sign-Up Here</Link>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
