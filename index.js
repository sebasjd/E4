const card = document.querySelector("#card");
const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const init = () => card.innerHTML = `<p class="start">Para continuar introduzca un número en la casilla de ID y presione SEND</p>`
init()

const fetchPokemon = async(pokeID) => {
    try {
        const response = await fetch(baseURL + pokeID + `/`);
        const data = await response.json();
        // console.log(response);
        return data
    } catch { alert("Este ID no coincide con ningún pókemon") }
}




const renderPockemon = async(pokeID) => {
        const pokemon = await fetchPokemon(pokeID)
        const { id, name, types, height, weight, sprites } = pokemon

        card.innerHTML =
            `<h4 id="id">#${id}</h4>
    <img src="${sprites.other.home.front_default}" alt="${name}">
    <h1 id="name">${name}</h1>
    <section id="types">${types.map(type =>{return `<span class="type ${type.type.name}">${type.type.name}</span>`}).join("")}</section>
    <h3 id="height">Altura:<span>${height*10} Cm.</span></h3>
    <h3 id="weight">Peso:<span>${weight/10} Kgs.</span></h3>
    `
    
}

const vanish = ()=>{
    card.classList.remove("appear")
    card.classList.add("vanish")
}
const appear = ()=>{
    card.classList.remove("vanish");
    card.classList.add("appear");
}
const isEmpty= ()=>alert("Debe introducir un ID para continuar");

const isWrong= ()=>alert("No existen tantos pókemons");

btn.addEventListener("click", button);

const mostrar =()=>{}
function button(e) {
    e.preventDefault();
    let pokeID = input.value.trim();
    vanish()
    pokeID=="" || pokeID==0?isEmpty():pokeID>20000?isWrong():setTimeout(renderPockemon,200,pokeID);
    setTimeout(appear, 200);
    input.value = "";
    
}