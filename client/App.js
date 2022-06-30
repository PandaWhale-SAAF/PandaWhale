import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Login from './components/Login.jsx';

import {useSelector} from 'react-redux';

export default function App() {
  const user_id = useSelector((state) => state.user.user_id);

  if (user_id !== '') {
    return (
      <div className="app-container" display="flex">
        <Navbar />
        {/* <h1>Panda Whale</h1> */}
        <div id='outlet-container'>
          <Outlet id="eventContainer" />
        </div>
      </div>
    );
  } else {
    return <Login />;
  }

  //return {appRender};

  // Put a check in place for whether user is logged in
}

//         <div>
//             <h1>Hello world!</h1>
//             <nav id = "nav">
//             <Link to="/home">Home</Link> |{" "}
//             <Link to="/createEvent">Create Event</Link>
//             </nav>
//             {/* persisting */}
//             <Outlet/>
//             <div>
//             <MainContainer/>
//             </div>
//         </div>
//     )
// }
//}

//render() {

// fetch("http://localhost:3000/")
//     .then(response => response.json())
//     .then(response => console.log(response));
