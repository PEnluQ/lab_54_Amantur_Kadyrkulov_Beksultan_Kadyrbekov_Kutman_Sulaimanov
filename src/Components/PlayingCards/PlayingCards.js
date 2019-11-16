import React from 'react';
import Card from "../Card/Card";
import './PlayingCards.css'
class PlayingCards extends React.Component{
    state = {
        generatedCards: [],
        ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
        suits: ['♦', '♥', '♠', '♣'],
    };
    generate = () => {
        console.log('trial');
        for(let i = 0; i < 5; i++){
            let rank = this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)];
            let suit = this.state.suits[Math.floor(Math.random() * this.state.suits.length)];
            let suitName;
            switch (suit) {
                case '♦':
                    console.log('diams');
                    suitName = 'diams';
                    break;
                case '♥':
                    console.log('heart');
                    suitName = 'heart';
                    break;
                case '♠':
                    console.log('spades');
                    suitName = 'spades';
                    break;
                case '♣':
                    console.log('clubs');
                    suitName = 'clubs';
                    break;
                default:
                    console.error('Error occured');
            }
            let generatedCards = [];
            generatedCards.push()
            console.log(rank);
            console.log(suit);
        }
    };
    render() {
        let rank = '7';
        let suit = 'diams';
        let suitS = '♦';
        let className = 'card rank-' + rank + ' ' + suit;
        return(
            <div className='playingCards'>
                <button type='button' onClick={this.generate}>Generate</button>
                <br/>
                <Card className={className} rank={rank} suit={suitS}/>
            </div>
        );
    }
}

export default PlayingCards;