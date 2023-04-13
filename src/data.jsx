import axios from "axios";

export const fetchData=(setData)=>{
  const options = {
    method: "GET",
    url:"http://localhost:8000/api/getAllLocation"
  };

  axios
    .request(options)
    .then((response) => {
       setData(response.data.data)
       
       console.log(response)
      
    })
    .catch((error) => console.log(error));
}

export const updateData=(coords)=>{

  const lat=coords.latitude;
  const lon=coords.longitude;
  const newData = {
    latitude:lat.toPrecision(5),
    longitude:lon.toPrecision(5),
  }

  const options = {
    method: "POST",
    url:"http://localhost:8000/api/addLocation",
    data:newData
  };

  axios
    .request(options)
    .then((response) => {
       
       console.log(response)
      
    })
    .catch((error) => console.log(error));
}

export default fetchData;