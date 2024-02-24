import './Form.css';
import { useState } from 'react';

function Form({addTrick}) {
  const [alert, setAlert] = useState('')
  const [formData, setFormData] = useState({
    stance: '',
    name: '',
    obstacle: '',
    tutorial: '',
    id: Date.now()
  })

  const setFormValue = (e) => {
    setAlert('');
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  
  const isFormComplete = () => {
    return !Object.values(formData).some(inputData => inputData === "");
  }

  const submitTrick = e => {
    e.preventDefault();
    !isFormComplete() ? 
    setAlert('Fill out all required fields.') :
    fetch('http://localhost:3001/api/v1/tricks', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(postResult => {
        addTrick(postResult)
        setFormData({stance: '', name: '', obstacle: '', tutorial: ''})
      })
      .catch(err => console.error(err))
  }

  return (
    <>
    <form>
      <select 
        name="stance" 
        id="stance-select"
        value={formData.stance}
        onChange={setFormValue}
        >
        <option value="">Choose your stance</option>
        <option value="regular">regular</option>
        <option value="goofy">goofy</option>
      </select>
      
      <input 
        type="text"
        placeholder='Name of trick'
        name='name'
        value={formData.name}
        onChange={setFormValue}
        />
      
      <select 
        name="obstacle" 
        id="obstacle-select"
        value={formData.obstacle} 
        onChange={setFormValue}
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
        name='tutorial'
        value={formData.tutorial}
        onChange={setFormValue}
        />
      
      <button onClick={e => submitTrick(e)}>SeNd iT!</button>
    </form>
    <p className='alert'>{alert}</p>
    </>
  )
}

export default Form