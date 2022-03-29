let pokemonRepository = (function () {
    let pokemonList = [
        {
            name:  "Bulbasaur",
            height: '.7',
            types: ['grass', ' poison']
        },
        {
            name:  "Ivysaur",
            height: '1',
            types: ['grass', ' poison']
        },
        {
            name: "Venusaur",
            height: '2',
            types: ['grass', ' poison']
        },
        {
            name: "Charmander",
            height: '.6',
            types: ['fire'],
        },
        {
            name: "Charmeleon",
            height: '1.1',
            types: ['fire'],
        },
        {
            name: "Charizard",
            height: '1.7',
            types: ['fire', ' flying'],
        },
    ];

        function add(pokemon) {
            pokemonList.push(pokemon);
        }

        function getAll() {
            return pokemonList;
        }

        function addListener (button, pokemon) {
            button.addEventListener ('click', function () {
                showDetails(pokemon)
            });

        }

        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
            addListener(button, pokemon);
        }

        function showDetails(pokemon) {
            console.log(pokemon)
        }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            showDetails: showDetails
        };

        document.write(pokemonList);

})();

console.log(pokemonRepository.getAll())

// forEach Loop for pokemonList
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    
});

/* Goes directly below the forEach
console.log("Name: " + pokemon.name + " Height: " + pokemon.height + " Types: " + pokemon.types);

    {
        document.write(" Name: " + pokemon.name + " (height: " + pokemon.height +')');
    // Conditional Text 
        if (pokemon.height >= 2) {
            document.write( " - Wow, that\'s big!");
        }
    }
    document.write("<br>" + "<br>");
*/

/* For Loop of pokemonList
for (let i = 0; i<pokemonList.length; i++) {
    console.log(pokemonList[i].name);
    console.log(pokemonList[i].height);
    for(let j = 0; j < pokemonList[i].types.length; j++ )

    {
     console.log(pokemonList[i].types[j])   
    }
    {
        document.write(" Name: " + pokemonList[i].name);
        document.write( " (height: " + pokemonList[i].height +')' );
    // Conditional Text 
        if (pokemonList[i].height > 1.8) {
            document.write( " - Wow, that\'s big!");
        }
    }
    document.write("<br>" + "<br>");

}
*/