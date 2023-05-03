console.log('Before the root log');
console.log('root', document.getElementById('root'));
console.log('After the root log');

console.log('index.tsx loaded');
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    console.log('root', document.getElementById('root'))
    return (
        <div>
            <h1>check out my shroom react app lol</h1>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

console.log('root', document.getElementById('root'));