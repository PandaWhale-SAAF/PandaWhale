import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom"
import EventBox from "./EventBox"
import { useState } from 'react';
import { getData } from "./fakedata";
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';

import { useSelector, useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreator from './actions/actions.js';

const data = getData();
console.log('data', data)

//new get request, the req.params will 

export default function MainContainer (){
 
    const eventState = useSelector((state) => state.event);
    const {data, sortType} = eventState;

    const dispatch = useDispatch();
    const { setData, setSortType } = bindActionCreators(actionCreator, dispatch)



    //fetch data
    useEffect(() => {
        const url = 'http://localhost:3000/home'
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                sortArray(sortType, json)
            } catch (err) {
                    console.log("error", error);
            }
        }
        fetchData();
    }, []); //only re render if setData is being called ==> changed to only run once

    useEffect(() => {
        sortArray(sortType)
    }, [sortType]); //only run if sortType changes
  
    const sortArray = (type, importedData = data) => { //sorts array
        const sorted = [...importedData].sort((a,b) => a[type].localeCompare(b[type]));
        console.log(sorted)
        setData(sorted);
    };

    return (
        <div className='mainContainer'>
            {/* <NavBar/> */}
            <label id = "sortText">Sort By: &nbsp;</label>
        <select id="dropDown" onChange={(e) => setSortType(e.target.value)}>
            <option value="title">Title</option>
            <option value="date">Date</option>
            <option value="activity_type">Activity</option>
        </select>
          <ul>{data.map(info => (<EventBox key={info.id} info={info}/>))}</ul> 
       </div>
    )}




    // const info = fetchData();
    // console.log(info)
    // const [listItems, setListItems] = useState(Array.from(Arr))
    //  const [eventBox, setEventBox] = useState(data[0]);

// export default function MainContainer (){
//         const [event, setEvent] = useState([]);

// //   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:3000/home`)
//       .then((res) => res.json())
//       .then((data) => setEvent(data));
//   }, []);

//   if (event === undefined) {
//     return <>Still loading...</>;
//   }

//   return (
//     <div className='mainContainer'>
//     <h2>Search Bar</h2>
//     <ul>{data.map(item => (
//   <EventBox
//   key={item.id}
//   item={data}/>
//    </ul> ))}
//  </div>
// }
    // const url = 'http://localhost:3000/home'
    
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const info = await response.json();
    //         return info;
    //     }catch (err) {
    //         console.log("error", error);
    //     }
    // }
    // const moveData = async () => {
    //     const info = await fetchData();
    //     console.log(info)
    //     const eventBoxFeed = info.map(el => 
    //     <EventBox 
    //             // onComment={}
    //             key={el.id}
    //             info={el} />
    //         )
    //     return (
    //         <div className='mainContainer'>
    //           <h2>Search Bar</h2>
    //           <ul>{eventBoxFeed}</ul>
    //         </div>
    //     )
    // }
    // moveData();
    // }



    //infinite scroll set up
// const useInfiniteLoading = (props) => {
//     const { getItems } = props;
//     const [items, setItems] = useState([]);
//     const pageToLoad = useRef (new URLSearchParams(window.location.search).get('page') || 1);
//     const initialPageLoaded = useRef(false);
//     const [hasMore, setHasMore] = useState(true);

//     const loadItems = async () => {
//         const data = await getItems({
//             page: pageToLoad.current
//         });
//         setHasMore(data.totalPages > pageToLoad.current);
//         setItems(prevItems => [...prevItems, ...data]);
//     };
//     useEffect(() => {
//         if (initialPageLoaded.current) {
//             return;
//         }
//         loadItems();
//         initialPageLoaded.current = true;
//     }, [loadItems])

//     return {
//         items,
//         hasMore,
//         loadItems
//     };
// }
// export default MyList = () => {
//    const { items, hasMore, loadItems } = useInfiniteLoading ({ 
//      getItems: ({ call api endpoint })
//})
//return (
//     <div>
//         <ul>
//             {items.map (item => (
//                 <li key={item.id}>
//                     {item.name}
//                 </li>
//             ))}
//         </ul>
//         {hasMore && 
//         <button onClick={() => loadItems()}>Load More</button>
//         }
//     </div>
//   );
// }

// const DropDownSort = () => {
//     const dropdownRef = useRef(null);
//     const [isActive, setIsActive] = useState(false);
//     const onClick = () => setIsActive(!isActive);
//     return (
//         <div className='menu-container'>
//             <button onClick={onClick} className="menu-trigger">
//                 <span>Sort By?</span>
//             </button>
//             <nav ref={dropdovnRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
//                 <ul>
//                     <li>Alphabet</li>
//                     <li>Date</li>
//                     <li>Activity</li>
//                 </ul>
//             </nav>
//         </div>
//     )

// }