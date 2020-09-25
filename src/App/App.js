import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import CardsList from '../CardsList/CardsList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { cards: [] };
  }

  handleAddCard(cardName) {
    let tempState = this.state;
    tempState.cards.push(cardName);
    this.setState(tempState);
  }

  render() {
    return (
      <div className="app">
        <Navbar handleAddCard={ this.handleAddCard.bind(this) } />
        <CardsList appState={ this.state } />
      </div>
    );
  }
}

export default App;
