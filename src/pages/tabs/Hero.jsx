import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selector/selector'

export default function Hero() {

  const { id } = useParams()
  const navigate = useNavigate()

  // console.log(id)
  const heroe = getHeroById(id)
  const { superhero, publisher, alter_ego, first_appearance, characters } = heroe

  if (!heroe) {
    return <Navigate to='/' />
  }

  const imagePath = `/assets/${heroe.id}.jpg`

  const handleReturn = () => {
    navigate(-1)
  }

  return (
    <>
      <div className="card mb-3 mt-0 mx-auto" style={{ 'maxWidth': '840px' }}>
        <div className="row g-0">
          <div className="col-md-4" >
            <img src={imagePath} className="img-fluid w-75" alt="..." style={{"maxWidth": "180px"}} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <h5 className=" fs-3 m-0 text-center">{superhero}</h5>
                <button onClick={handleReturn} className="btn btn-success ">{`<-- Volver`}</button>
              </div>
              <hr />
              <p className="m-0 fs-5"><b>Name: </b>{alter_ego}</p>
              <p className="m-0 fs-5"><b>Publisher: </b>{publisher}</p>
              <b className='fs-5'>First appearance:</b>
              <p className="m-0 fs-5">{first_appearance}</p>
              <b className='fs-5'>Characters:</b>
              <p className="m-0 fs-5">{characters}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


