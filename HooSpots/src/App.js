import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import {TextField} from "@material-ui/core";

function App() {
  const [spots, setSpots] = useState([]);
  const handleChange = e => {
    console.log('Typed => ${e.target.value}')
  };

  return (
    <div> 
      <h1>HooSpots</h1>
      {spots.map((spot) => (
        <h3>{spot}</h3>
      ))}

      <TextField value = {value} variant="outlined" onChange={handleChange} />

      <button
        onClick={() => {
          setSpots([...spots, "a new spot"]);
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
