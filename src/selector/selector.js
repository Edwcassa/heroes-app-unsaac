import {heroes as data} from '../data/heroes'

export const getHeroByPublisher = (publisher) => {
    return data.filter(e => e.publisher === publisher)
}

export const getHeroById = (id) => {
  return data.find(e => e.id === id)
}

export const getHeroByName = (name='') => {
  // console.log("se llamo")
  if (name === '') return []
  else {
    name = name.toLowerCase()
    return data.filter(heroe => heroe.superhero.toLowerCase().includes(name))
  }
}