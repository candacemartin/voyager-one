import React, {useState} from 'react';
import NewCardForm from './components/NewCardForm';
import Card from './components/Card';

type Card = {
    id: number;
    title: string;
    content: string;
}

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const addCard = (newCard: Card) => {
        newCard.id = Date.now();
        setCards([...cards, newCard]);
        console.log('cards', cards); 
    };
    const deleteCard = (cardId: number) => {
        const filteredCards = cards.filter(card => card.id !== cardId);
        setCards(filteredCards);
    };

    return (
        <div>
            <h1>check out my shroom react app lol this is hot</h1>
            <NewCardForm addCard={addCard} />
            {cards.map(card => (
                <Card key={card.id} card={card} deleteCard={deleteCard} />
            ))}
        </div>
    )
};

export default App;