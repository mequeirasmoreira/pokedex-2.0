//Resgate dos valores dentro do document por ID
document.addEventListener("DOMContentLoaded", function () {
    const pokemonSelect = document.getElementById("pokemon");


    //Transformando os filtros em link
    pokemonSelect.addEventListener("click", function () {
        redirectToFilterPage("pokemon");
    });

    //Função para redirecionar com base no filtro selecionado
    function redirectToFilterPage(filterName) {

        //Link dinâmico aqui
        const filterURL = `pokemon/${filterName}`;

        //Redirecionar o usuário para a página apropriada
        window.location.href = filterURL;
    }
});