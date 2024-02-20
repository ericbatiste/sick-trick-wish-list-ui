import './Form.css';
import { useState } from 'react';

function Form({addTrick}) {
  const [stance, setStance] = useState('');
  const [name, setName] = useState('');
  const [obstacle, setObstacle] = useState('');
  const [tutorial, setTutorail] = useState('');


  // fetch('http://localhost:3001/api/v1/tricks', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.error(err))
  // })


  const submitTrick = e => {
    e.preventDefault();
    const newTrick = {
      stance,
      name,
      obstacle,
      tutorial,
      id: Date.now(),
    }
    addTrick(newTrick);
    clearInputs()
  }

  const clearInputs = () => {
    setStance('');
    setName('');
    setObstacle('');
    setTutorail('');
  }

  return (
    <form>
      <select 
        name="stance" 
        id="stance-select"
        value={stance}
        onChange={e => setStance(e.target.value)}
      >
        <option value="">Choose your stance</option>
        <option value="regular">regular</option>
        <option value="goofy">goofy</option>
      </select>
      
      <input 
        type="text"
        placeholder='Name of trick'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      
      <select 
        name="obstacle" 
        id="obstacle-select"
        value={obstacle} 
        onChange={e => setObstacle(e.target.value)}
      >
        <option value="">Choose your obstacle</option>
        <option value="flatground">flatground</option>
        <option value="ledge">ledge</option>
        <option value="rail">rail</option>
        <option value="stairs">stairs</option>
        <option value="pool">pool</option>
      </select>
      
      <input 
        type="text"
        placeholder='Link to tutorial'
        name='tutorialLink'
        value={tutorial}
        onChange={e => setTutorail(e.target.value)}
      />
      
      <button onClick={e => submitTrick(e)}>SeNd iT!</button>
    </form>
  )
}

export default Form