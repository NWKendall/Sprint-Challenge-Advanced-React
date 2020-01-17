import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import PlayerList from "./components/PlayerList"

class App extends Component {

  state = {
    players: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players#")
      .then(res => {
        console.log(`this is local response`, res.data)
          this.setState({
            players: res.data
          })
      })
      .catch(err => {
        console.log(`this is local error`, err)
      })
  }


  render() {
    return (
      <div className="App">
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
  
}



export default App;
