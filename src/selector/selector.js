export const getHeroByPublisher = (data, publisher) => {
    return data.filter(e => e.publisher === publisher)
}

export const getHeroById = (data, id) => {
  return data.find(e => e.id === id)
}