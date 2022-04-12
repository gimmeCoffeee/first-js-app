/* eslint-disable no-undef */
//IIfe
let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let reload = false;

        function add(pokemon) {
            if (
                typeof pokemon === 'object' &&
                'name' in pokemon
            ) {
                pokemonList.push(pokemon);
            } else {
                console.log('pokemon is not correct');
            }
        }

        function getAll() {
            return pokemonList;
        }

    

        function addListItem(pokemon) {
            let pokemonList = document.querySelector('.pokemon-list');
            let listpokemon = document.createElement('li');
            let button = document.createElement('button');
            button.innerText = pokemon.name;
            button.classList.add('button-class');
            button.classList.add('btn');
            button.classList.add('btn-primary');
            button.setAttribute('data-toggle','modal');
            button.setAttribute('data-target','#myModal');
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
            button.addEventListener('click', function() {
             showDetails(pokemon);
        });
    }

        function loadList() {
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                    //console.log(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            })
        }

        function loadDetails(item) {
            let url = item.detailsUrl;
            return fetch(url).then(function (response) {
                return response.json();
            }).then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
                item.types = details.types;
            }).catch(function (e) {
                console.error(e);
            });
        }

        function showDetails(item) {
            loadDetails(item).then(function () {
                showModal(item)
            });
        }

        function showModal(pokemon) {
            //console.log(pokemon.types)
            $('.modal-title').html(pokemon.name)
            $('.modal-body').html('<p>Height: ' + pokemon.height + '</p>' + '<p>Types: ' +
             pokemon.types.map(x=>{
                 return x.type.name
             }) + '</p>'
             +`<img src=${pokemon.imageUrl}>`)
        }

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails,
            reload: reload
            // showModal: showModal,
        };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});