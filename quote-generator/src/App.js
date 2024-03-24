import React, { useState, useEffect } from 'react';
import './App.css';
import 'animate.css';

function App() {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then(res => res.json())
      .then(data => setQuotes(data[0]));
  }

  useEffect(() => {
    getQuote()
  }, []);

  return (
    <>
      <div>
        <div className='cont container'>
          <div className='text'>
            <h2 className='animate__animated animate__fadeIn'>"{quotes.quote}"</h2>
            <h4 className='animate__animated animate__fadeIn text-end fst-italic'>~{quotes.author}~</h4>
            <button className='btn animate__animated animate__flip' onClick={getQuote}>Get Quote</button>
          </div>

        </div>
      </div>
      <footer className="footer">© Made by ZvonimirZlo</footer>
    </>
  );
}

export default App;


