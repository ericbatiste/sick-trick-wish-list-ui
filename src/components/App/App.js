import './App.css';
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import Tricks from '../Tricks/Tricks';



function App() {
  const [tricks, setTricks] = useState([]);

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
    .then(res => res.json())
    .then(data => setTricks(data))
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
