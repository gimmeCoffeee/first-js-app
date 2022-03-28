
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

// forEach Loop for pokemonList
pokemonList.forEach(function(pokemons) {
    console.log("Name: " + pokemons.name + " Height: " + pokemons.height + " Types: " + pokemons.types);

    {
        document.write(" Name: " + pokemons.name + " (height: " + pokemons.height +')');
    // Conditional Text 
        if (pokemons.height >= 2) {
            document.write( " - Wow, that\'s big!");
        }
    }
    document.write("<br>" + "<br>");

});