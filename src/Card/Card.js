import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="title">{ this.props.name }</div>
                <div className="property">
                    <p>Property text here</p>
                </div>
                <div className="new-property">
                    <input type="text" placeholder="Enter text here"/>
                    <button>Add property</button>
                </div>
                <div className="new-child">
                    <select name="new-child">
                        <option value="Choose card">Choose card...</option>
                        {
                            this.props.appState.cards.map(
                                cardName => {
                                    return <option value={ cardName } >{ cardName }</option>
                                }
                            )
                        }
                    </select>
                    <button>Set as child</button>
                </div>
            </div>
        );
    }
}

export default Card;