const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}" data-pokemon-url="${pokemon.url}" id="${pokemon.name}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
    
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
    
                <img src="${pokemon.photo}"
                alt="${pokemon.name}">
            </div>
        </li>   
        
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener(`click`, () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

function loadAndDisplayPokemonDetails(pokemonUrl) {
    pokeApi.getPokemonDetail({ url: pokemonUrl}).then((pokemon) => {
        displayPokemonDetails(pokemon)
    })
}

/*
function displayPokemonDetails(pokemon) {
    const modal = document.getElementById('pokemonModal')
    const modalContent = modal.querySelector('.modal-content')

    modalContent.innerHTML = '';

    con


    //conteudo
    modalContent.innerHTML = `
    código html da página

    <!-- botao fechar modal-->
    <button id="closeModal">X</button>
    `

    //fechar a caixa
    const closeModalButton = modal.querySelector('#closeModal')
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    //exibe a caixa
    modal.style.display = 'block'
}

const pokemonElements = document.querySelectorAll('.pokemon')

pokemonElements.forEach((element) => {
    element.addEventListener('click', () => {
        const pokemonUrl = element.getAttribute('data-pokemon-url')
        loadAndDisplayPokemonDetails(pokemonUrl)
    })
})
*/

// Função para carregar e exibir os detalhes do Pokémon no modal
function displayPokemonDetails(pokemon) {
    const modal = document.getElementById('pokemonModal');
    const modalContent = modal.querySelector('.modal-content');

    // Limpa o conteúdo anterior do modal
    modalContent.innerHTML = '';

    // Cria os elementos HTML para exibir os detalhes do Pokémon
    const nameElement = document.createElement('h2');
    nameElement.textContent = pokemon.name;

    const numberElement = document.createElement('p');
    numberElement.textContent = `Número: #${pokemon.number}`;

    const typesElement = document.createElement('p');
    typesElement.textContent = `Tipos: ${pokemon.types.join(', ')}`;

    const imageElement = document.createElement('img');
    imageElement.src = pokemon.photo;
    imageElement.alt = pokemon.name;

    // Botão para fechar o modal
    const closeModalButton = document.createElement('button');
    closeModalButton.id = 'closeModal';
    closeModalButton.textContent = 'Fechar';

    // Adiciona os elementos ao modal
    modalContent.appendChild(nameElement);
    modalContent.appendChild(numberElement);
    modalContent.appendChild(typesElement);
    modalContent.appendChild(imageElement);
    modalContent.appendChild(closeModalButton);

    // Adiciona um evento de clique para fechar o modal
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Exibe o modal
    modal.style.display = 'block';
}

const pokemonElements = document.querySelectorAll('.pokemon');

pokemonElements.forEach((element) => {
    element.addEventListener('click', () => {
        const pokemonUrl = element.getAttribute('data-pokemon-url');
        pokeApi.getPokemonDetail({ url: pokemonUrl }).then((pokemon) => {
            displayPokemonDetails(pokemon);
        });
    });
});
