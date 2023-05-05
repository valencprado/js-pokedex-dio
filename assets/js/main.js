function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

    <div class="details">

    <ol class="types">
       ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
    </ol>
<img src="${pokemon.photo}"
    alt="${pokemon.name}">
</div>
</li>`;
}

const pokemonList = document.getElementById('pokemonList');
pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
})
    .catch((err) => console.log(err));