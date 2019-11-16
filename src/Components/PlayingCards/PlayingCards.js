import React from 'react';
import Card from "../Card/Card";
import './PlayingCards.css';
import CardDesk from "../../CardDesk";


function PlayingCards(props) {
    const deck = new CardDesk();
    const cards = deck.getCards();
    console.log(cards);
    let rank = '7';
    let suit = 'diams';
    let suitS = '♦';
    let className = 'card rank-' + rank + ' ' + suit;

    return(
        <div className='playingCards'>
            <button type='button' onClick={() => console.log(deck.getCards())}>Generate</button>
            <br/>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className={`card rank-${card.rank} ${card.suitName}`}
                    rank={card.rank}
                    suit={card.suit}/>
            ))}
        </div>
    );
}

export default PlayingCards;