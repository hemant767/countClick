import React, { useEffect, useState} from 'react'
import axios from "axios";

import './Trow.css'


const Trow = ({lat,long,count}) => {

    const[country,setCountry]= useState();
    const[city,setCity]= useState();

    const placeConvert=(lat,long)=>{
        const options = {
          method: "GET",
          url:`https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_API_KEY}&q=${lat}%2C${long}&pretty=1`
        };
      console.log(typeof(lat),typeof(long))

        axios
          .request(options)
          .then((data) => {
            setCountry(data.data.results[0].components.country)
            setCity(data.data.results[0].components.city)
            console.log(data)
            
          })
          .catch((error) => console.log(error));
    
          
        }

        useEffect(()=>{
                placeConvert(lat,long);
        },[])
      
  return (
    <div className='row'>
        <h4>{country}/{city}</h4>
        
        <h4>{count}</h4>
    </div>
  )
}

export default Trow;