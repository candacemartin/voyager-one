import React, { useState } from "react";

type NewCardFormProps = {
    addCard: (card: {id: number, title: string, content: string }) => void;
}

const NewCardForm = ({ addCard }: NewCardFormProps) => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log('form submitted');
        addCard({ id: Date.now(), title, content});
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Add Card</button>
        </form>
    );
};

export default NewCardForm;