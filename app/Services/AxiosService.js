

export const poke_api = new axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
  timeout: 2500,
})

export const sandbox_api = new axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/HaydenLiles/pokemon",
  timeout: 2500,
})