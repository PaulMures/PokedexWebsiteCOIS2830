const poke_container = document.getElementById('poke-container');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const pokemon_count = 150;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

const main_types = Object.keys(colors);
let allPokemon = [];

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
    updateDisplay(); // Show all Pokémon initially
};

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    allPokemon.push(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.includes(type));
    const color = colors[type];

    pokemonEl.style.backgroundColor = color;

    pokemonEl.innerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    return pokemonEl;
};

const updateDisplay = () => {
    poke_container.innerHTML = "";

    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = filterSelect.value;

    const filteredPokemon = allPokemon.filter(pokemon => {
        const nameMatch = pokemon.name.includes(searchTerm);
        const typeMatch = selectedType === "all" || pokemon.types.some(t => t.type.name === selectedType);
        return nameMatch && typeMatch;
    });

    filteredPokemon.forEach(pokemon => {
        poke_container.appendChild(createPokemonCard(pokemon));
    });
};

// Event Listeners
searchInput.addEventListener("input", updateDisplay);
filterSelect.addEventListener("change", updateDisplay);

fetchPokemons();
