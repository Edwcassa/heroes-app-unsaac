import React from 'react'
import { getHeroByPublisher } from '../selector/selector'
import HeroCard from './HeroCard'

export default function HeroList({ publisher }) {

  const data = getHeroByPublisher(publisher)

  return (
    <>
      <div className="container">
        <div className="row">
          {
            data.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                  <HeroCard heroe={item} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}


// https://www.youtube.com/watch?v=ei5-5vcEPz8  :  Web Zone
