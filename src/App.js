import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {
 const [info, setInfo] = useState([]);
 const div1 = document.createElement('span');
  //div1.innerHTML = info;
  console.log(div1);

 useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(res => {
  setInfo(res.data)
  console.log(res.data);
})
 }, []);
  
  return (
    <div className="App">
      <h1><a href={info.url}>{info.title}</a></h1>
      <h3>{info.copyright}</h3>
      <h5>{info.date}</h5>
      <p>{info.explanation}</p>
      
      <img src={info.hdurl} ></img>
    </div>
  );
}

export default App;
