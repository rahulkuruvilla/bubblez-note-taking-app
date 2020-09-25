import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = { currentText: "" };
    }

    handleTextChange(event) {
        this.setState({ currentText: event.target.value });
    }

    handleAddCard() {
        this.props.handleAddCard(this.state.currentText);
        document.querySelector(".navbar input").value = "";
    }

    render() {
        return (
            <div className="navbar">
                <input type="text" placeholder="Card name" onChange={ this.handleTextChange.bind(this) } />
                <button onClick={ this.handleAddCard.bind(this) } >Create card</button>
            </div>
        );
    }
}

export default Navbar;