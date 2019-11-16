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
        let generatedCards = [];
        for(let i = 0; i < 5;){
            let rank = this.state.ranks[Math.floor(Math.random() * this.state.ranks.length)];
            let suit = this.state.suits[Math.floor(Math.random() * this.state.suits.length)];
            let suitName;
            switch (suit) {
                case '♦':
                    suitName = 'diams';
                    break;
                case '♥':
                    suitName = 'heart';
                    break;
                case '♠':
                    suitName = 'spades';
                    break;
                case '♣':
                    suitName = 'clubs';
                    break;
                default:
                    console.error('Error occured');
            }
            let newCard = {rank, suit, suitName};
            console.log(newCard);
            if(generatedCards.includes(newCard.rank)){
                continue;
            }
            generatedCards.push(newCard);
            i++;
        }
        console.log(generatedCards);
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