import './TrickCard.css';

function TrickCard({stance, name, obstacle, tutorial}) {
  return (
    <article className='trick-card'> 
      <p>{stance} <span>{name}</span></p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </article>
  )
}

export default TrickCard