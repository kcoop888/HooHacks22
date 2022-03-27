import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [spots, setSpots] = useState([]);

  return (
    <div> 
      <h1>Study Spots</h1>
      {spots.map((spot) => (
        <h3>{spot}</h3>
      ))}

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
