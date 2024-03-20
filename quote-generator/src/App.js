import React, { useState } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <div className='App'>
      <button onClick={getQuote}>Get Quotes</button>
    </div>
  );
}

export default App;
