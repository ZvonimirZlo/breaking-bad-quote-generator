import React, { useState } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then(res => res.json())
      .then(data => setQuotes(data[0]));
  }

  return (
    <div className='container'>
      <div className='App'>
         <div className='text'>
         <h3>{quotes.quote}</h3>
         <h4>~{quotes.author}~</h4>
         </div>
        </div>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;


