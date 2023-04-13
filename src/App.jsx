import React, { useState, useEffect } from 'react'
import Trow from './Trow';
import axios from "axios";

import { useGeolocated } from "react-geolocated";
import {fetchData , updateData }from './data';

import './App.css'


const App = () => {
  
  
  
  const [data, setData] = useState([]);

  const [count,setCount]=useState(0);

  const increase = async() => {

    
    
    setCount(count+1);
  
    !isGeolocationAvailable ? (
      console.log("Not support")
    ) : !isGeolocationEnabled ? (
      console.log("not enabled")
    ) :
      coords ? (

        updateData(coords)
        

      ) : (
        console.log("Getting the location data")
      )

  }

  
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {

    (async()=>{
      fetchData(setData)

     
    })()
  
  }, [count])

 




  return (

    <div className='main'>
      <h1>Click Count Generator</h1>
      <div className='Count'>
        <h1>{count}</h1>
        <button onClick={()=>increase()}>Click</button>
      </div>
      <div>

        <div className='col'>
            
            <h3>Place</h3>
            <h3>Clicks</h3>
        </div>
        <div className='mat'>
            

            {data ?
              (data.map(obj => (
               
              <Trow 
              
              lat={obj.location.latitude}
              long={obj.location.longitude}
              count={obj.count}
              />  

              )))
              
              : null}
              
        </div>
      </div>



    </div>
  )
}

export default App