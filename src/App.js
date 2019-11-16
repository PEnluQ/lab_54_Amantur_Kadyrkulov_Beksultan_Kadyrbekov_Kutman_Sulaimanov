import React, { Component } from 'react';
import './App.css';
import './Card.css';
import PlayingCards from "./Components/PlayingCards/PlayingCards";

class App extends Component {
  render() {
    return(
        <div className='App'>
            <PlayingCards/>
        </div>
    )
  }
}

export default App;
