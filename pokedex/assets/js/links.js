//Resgate dos valores dentro do document por ID
document.addEventListener("DOMContentLoaded", function () {
    const filterPokedex = document.getElementById("pokedex");
    const filterMoves = document.getElementById("filter-moves");
    const filterAbilities = document.getElementById("filter-abilities");
    const filterItems = document.getElementById("filter-items");
    const filterLocations = document.getElementById("filter-locations");
    const filterTypeCharts = document.getElementById("filter-type-charts");
    const filterGenerationI = document.getElementById("filter-generation-i");
    const filterGenerationII = document.getElementById("filter-generation-ii");
    const filterGenerationIII = document.getElementById("filter-generation-iii");
    const filterGenerationIV = document.getElementById("filter-generation-iv");

    //Transformando os filtros em link
    filterPokedex.addEventListener("click", function () {
        redirectToFilterPage("pokedex");
    });

    filterMoves.addEventListener("click", function () {
        redirectToFilterPage("Moves");
    });

    filterAbilities.addEventListener("click", function () {
        redirectToFilterPage("Abilities");
    });

    filterItems.addEventListener("click", function () {
        redirectToFilterPage("Items");
    });

    filterLocations.addEventListener("click", function () {
        redirectToFilterPage("Locations");
    });

    filterTypeCharts.addEventListener("click", function () {
        redirectToFilterPage("TypeCharts");
    });

    filterGenerationI.addEventListener("click", function () {
        redirectToFilterPage("GenerationI");
    });

    filterGenerationII.addEventListener("click", function () {
        redirectToFilterPage("GenerationII");
    });

    filterGenerationIII.addEventListener("click", function () {
        redirectToFilterPage("GenerationIII");
    });

    filterGenerationIV.addEventListener("click", function () {
        redirectToFilterPage("GenerationIV");
    });

    //Função para redirecionar com base no filtro selecionado
    function redirectToFilterPage(filterName) {

        //Link dinâmico aqui
        const filterURL = `filter/${filterName}`;

        //Redirecionar o usuário para a página apropriada
        window.location.href = filterURL;
    }
});