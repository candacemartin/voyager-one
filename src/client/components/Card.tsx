import React from 'react';

type CardProps = {
    card: {
        id: number;
        title: string;
        content: string;
    };
    deleteCard: (cardId: number) => void;
};

const Card = ({ card, deleteCard }: CardProps) => {
    return (
        <div>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
            <button onClick={() => deleteCard(card.id)}></button>
        </div>
    );
};

export default Card;