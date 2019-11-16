class CardDesk {
    constructor(){
        this.generatedCards = [];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
        this.suits = ['♦', '♥', '♠', '♣'];
    }
    getCards(){
        for(let i = 0; i < 5;){
            let rank = this.ranks[Math.floor(Math.random() * this.ranks.length)];
            let suit = this.suits[Math.floor(Math.random() * this.suits.length)];
            let suitName;
            switch (suit) {
                case '♦':
                    suitName = 'diams';
                    break;
                case '♥':
                    suitName = 'hearts';
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
            for(let key of this.generatedCards){}


            this.generatedCards.push(newCard);
            i++;
        }
        return this.generatedCards;
    }
}
export default CardDesk;