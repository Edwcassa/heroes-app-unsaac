import {heroes as data} from '../data/heroes'

export const getHeroByPublisher = (publisher) => {
    return data.filter(e => e.publisher === publisher)
}

export const getHeroById = (id) => {
  return data.find(e => e.id === id)
}