import React from 'react';

const Card = props => {
    return(
        <div className={props.className}>
            <span className="rank">7</span>
            <span className="suit">♦</span>
        </div>
    )
};

export default Card;