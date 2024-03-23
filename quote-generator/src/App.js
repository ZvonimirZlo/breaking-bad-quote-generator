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
    <>
      <div>
        <div className='cont container-sm '>
          <div className='text'>
            <h3 className='animate__animated animate__fadeIn fw-bold'>{quotes.quote}</h3>
            <h4 className='animate__animated animate__fadeIn text-end fst-italic'>{quotes.author}</h4>
            <button className='animate__animated animate__flip btn btn-outline-dark btn-lg fw-bold' onClick={getQuote}>Get Quote</button>
          </div>
          
        </div>
        
      </div>

      <footer className="footer">© Made by ZvonimirZlo</footer>
    </>
  );
}

export default App;


