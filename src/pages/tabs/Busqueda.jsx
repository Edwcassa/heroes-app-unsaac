import React from 'react'
import { useForm } from '../../hooks/useForm';
import {getHeroByName} from '../../selector/selector'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import HeroCard from '../../components/HeroCard';
import { useMemo } from 'react';


export default function Busqueda() {

  const navigate = useNavigate()
  const location = useLocation()
  const { q=''} = queryString.parse(location.search)
  // console.log(query)

  const [value, handleInputChange] = useForm({ searchText : q })
  const {searchText} = value

  const heroFiltered = useMemo(() => getHeroByName( q ), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    // console.log(searchText)
    navigate(`?q=${ searchText }`)
    // console.log(heroFiltered)
  }

  return (
    <div>
      <h1>Busqueda</h1>
      <form className="d-flex" onSubmit={handleSearch}>
        <input onChange={handleInputChange} value={searchText} className="form-control me-2 w-50 fs-5" name='searchText' type="search" placeholder="Search" aria-label="Search" autoComplete='off'/>
        <button className="btn btn-success lg" type="submit">Search</button>
      </form>
      <div>
        <h4>Resultados</h4>
        {
          (q === '') 
            ? <div className='alert alert-info'>Buscar un heroe</div>
            : (heroFiltered.length == 0)  && <div className='alert alert-danger'>No hay resultados para {q}</div>
        }
        {
          heroFiltered.map( hero => {
            return <HeroCard key={hero.id} heroe={hero} />
          })
        }
      </div>
    </div>
  )
}
