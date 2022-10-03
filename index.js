const card = document.querySelector("#card");
const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async(pokeID) => {
    const response = await fetch(baseURL + pokeID + `/`);
    const data = await response.json();
    // console.log(data);
    return data
}



const renderPockemon = async(pokeID) => {
        const pokemon = await fetchPokemon(pokeID);
        const { id, name, types, height, weight, sprites } = pokemon
        console.log(sprites);

        card.innerHTML =
            `<h4 id="id">#${id}</h4>
    <img src="${sprites.other.home.front_default}" alt="${name}">
    <h1 id="name">${name}</h1>
    <section id="types">${types.map(type =>{return `<span class="type ${type.type.name}">${type.type.name}</span>`}).join("")}</section>
    <h3 id="height">Altura:<span>${height*10} Cm.</span></h3>
    <h3 id="weight">Peso:<span>${weight/10} Kgs.</span></h3>
    `
}

renderPockemon(1)
btn.addEventListener("click", button);

function button(e) {
    e.preventDefault();
    let pokeID = input.value.trim();
    renderPockemon(pokeID)
    input.value = "";
}