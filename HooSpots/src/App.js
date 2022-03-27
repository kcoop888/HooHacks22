import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, Component} from "react";
import {TextField, Button} from "@material-ui/core";




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      spot: "",
      
    };
    this.spots = [];
    // const [spots, setSpots] = useState([]);

  }


  hoospots(){
    const [spots, setSpots] = useState([]);
    return(
      <form>
      <label>Enter your name:
        <input
          type="text" 
          value={spots}
          onChange={(Event) => setSpots(Event.target.value)}
        />
      </label>
    </form>
    )


  }
  

  spotholder(){
    const spots = ["hello"];
    return(
      <>
        <ul>
          {this.state.spot.map((spot) => <h3>{spot}</h3>)}
        </ul>
      </>
    )


  }

  setSpot = event => {
    this.setState({
      spot: event.target.value
    });
    // this.setState({
    //   spots: [event.target.value]
    // });
  };

  setSetSpot(spot) {
    let temp = this.spots;
    temp.push(spot);
    // let sp2 = [spot];
    // let arr = temp.concat(sp2);
    this.setState({
        spots: temp
      });

    return(
      <>
        <ul>
          {temp.map((spot) => <h3>{spot}</h3>)}
        </ul>
      </>
    )
  }


  

  render(){
    return (
      <div> 
        <h1>HooSpots</h1>
        {this.spots.map((sp) => (
          <h3>{sp}</h3>
        ))}

        {/* <this.hoospots /> */}

  
        <TextField variant="outlined" placeholder='New Spot?' onChange={this.setSpot} value={this.state.spot} />
  
        <div className='Button'>
          <Button variant='contained' 
          color='primary' 
          onClick={() => {
            // alert(this.state.spot);
            this.setSetSpot(this.state.spot);
          }}
          >
            Send Spot
          </Button>
        </div>
      </div>
    );
  }
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

