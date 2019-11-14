import React, { Component } from 'react';
import Card from "./Components/Card/Card";
import './App.css';
import './Card.css';

class App extends Component {

  render() {
    let rank = '7';
    let suit = 'diams';
    let className = 'card rank-' + rank + ' ' + suit;
    return(
        <div className='App'>
          <div className='playingCards'>
          <Card className={className}/>
          </div>
        </div>
    )
  }
}

export default App;
