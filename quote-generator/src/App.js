import React, { useState } from 'react';
import './App.css';
import 'animate.css';

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
         <h3 className='animate__animated animate__fadeIn'>"{quotes.quote}"</h3>
         <h4 className='animate__animated animate__fadeIn'>~{quotes.author}~</h4>
         </div>
        </div>
      <button className='animate__animated animate__bounce' onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;


