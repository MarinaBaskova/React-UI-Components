import React from 'react';
import CardBanner from './CardBanner'
import CardContent from './CardContent'
import './Card.css';

const CardContainer = () => {
    return (
        <div className="cardContainer" onClick={() => window.location.href = "https://www.reactjs.org"}>
            <CardBanner />
            <CardContent />
        </div>

    )
}

export default CardContainer;
