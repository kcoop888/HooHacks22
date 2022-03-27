import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import {TextField, Button} from "@material-ui/core";

function App() {
  const [spots, setSpots] = useState([]);
  // string temp = "";
  const handleChange = e => {
    // temp = e;
    console.log('Typed => ${e.target.value}')
  };


  function Spot({spot}){

    // const storeChoice = (spot) => {
      
    // }


    return(
      <div>
        {/* <h4>{spot.spot}</h4> */}
        <h4>Fake News</h4>
      </div>
    )
  }

  return (
    <div> 
      <h1>HooSpots</h1>
      {spots.map((spot) => (
        <Spot spot={spot}></Spot>
      ))}

      <TextField spots = {spots} variant="outlined" onChange={handleChange} />

      <button
        onClick={() => {
          setSpots([...spots, handleChange]);
        }}
        >
          Button
        </button>
    </div>
  );
}
















  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

export default App;
