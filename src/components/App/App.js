import './App.css';
import React, { useState, useEffect } from 'react';
import Tricks from '../Tricks/Tricks';



function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .then(data => setTricks(data))
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
