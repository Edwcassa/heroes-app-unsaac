import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroCard({ heroe }) {

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe

  const imagePath = `/assets/${id}.jpg`

  return (
    <div className="card mb-4 shadow-sm" style={{"height": "14rem"}}>
      <div className='container mx-auto my-auto  '>
        <div className='d-flex flex-row'>
          <div className='col-6'>
            <img className='col' src={imagePath} width='120px' />
          </div>
          <div className='col'>
            <div className='card-body'>
              <div className='card-title'><h4>{superhero}</h4></div>
              <div className='card-text'><p>{alter_ego}</p></div>
              <Link to={`/hero/${id}`}>
                <span>Saber mas</span>
              </Link>
            </div>
            {/* <h2>{superhero}</h2> */}
            {/* <p>{alter_ego}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

