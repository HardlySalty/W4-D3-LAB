

export class Pokemon{
  constructor(data){
    this.id = data.id || null
    this.name = data.name
    this.url = data.url
    // STATS
    this.height = data.height || null
    this.weight = data.weight || null
    this.sprites = data.sprites || null
    this.stats = data.stats || null
    this.types = data.types || null
  }

  get pokemonListTemplate(){
    return`
    <div class="col-12 my-2">
      <div class="card text-light" id="poke-card">
        <div class="card-body">
          <span class="d-flex"><p class="card-title fs-3">${this.name}<p id="type-font"><u>${this.types[0].type.name}</u></p></p></span>
          <p class="card-text">Hp: ${this.stats[0].base_stat} | Atk: ${this.stats[1].base_stat} | Def: ${this.stats[2].base_stat}</p>
        </div>
      </div>
    </div>
    `
  }

  get pokemonTemplate(){
    return`
    <img id="game-img" draggable="false" oncontextmenu="return false" src="${this.sprites.other["official-artwork"].front_default}" alt="">
    `
  }
} 