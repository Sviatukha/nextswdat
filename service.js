export async function getData  (category, id)  {
  category =  category === 'characters' ? 'people' : category;
    const resp =  await  fetch(`https://swapi.dev/api/${category}/${id ? id : ''}`)
    const response = await resp.json();
    console.log(`https://swapi.dev/api/${category}/${id ? id : ''}`)
    return  response.results
}

export function getUrl(category, index) {
  const ids ={
    starships: [1, 2, 5, 9, 10, 11, 12, 13, 15, 16],
    vehicles: [4, 6, 7, 8, 14, 16, 18, 19, 20, 24],
    characters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    species: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    planets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    films: [1, 2, 3, 4, 5, 6]
  };

  return `https://starwars-visualguide.com/assets/img/${category}/${ids[category][index]}.jpg`;
}

export const categories = ['characters', 'species', 'starships','vehicles', 'planets', 'films'];