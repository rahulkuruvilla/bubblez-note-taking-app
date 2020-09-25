import React, { Component } from 'react';
import './CardsList.css';
import Card from '../Card/Card';

class CardsList extends Component {
    render() {
        return (
            <div className="cards-list">
                {
                    this.props.appState.cards.map(
                        cardName => {
                            return <Card name={ cardName } appState={ this.props.appState } />
                        }
                    )
                }
            </div>
        );
    }
}

export default CardsList;
