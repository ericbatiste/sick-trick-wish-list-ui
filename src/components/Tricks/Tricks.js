import './Tricks.css'
import TrickCard from '../TrickCard/TrickCard'

function Tricks({ tricks }) {
  const trickCards = tricks.map(trick => {
    return (
      <TrickCard 
        stance={trick.stance}
        name={trick.name}
        obstacle={trick.obstacle}
        tutorial={trick.tutorial}
        id={trick.id}
        key={trick.id}
      />
    )
  }) 

  return (
    <section className='tricks-container'>
      {trickCards}
    </section>
  )
}

export default Tricks