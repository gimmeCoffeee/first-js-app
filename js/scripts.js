//IIfe
let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

        function add(pokemon) {
            if (
                typeof pokemon === "object" &&
                "name" in pokemon
            ) {
                pokemonList.push(pokemon);
            } else {
                console.log("pokemon is not correct");
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
            listpokemon.appendChild(button);
            pokemonList.appendChild(listpokemon);
            button.addEventListener('click', function(event) {
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
                    console.log(pokemon);
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
           // pokemonRepository.loadDetails(item).then(function () {
              //  console.log(item);
            });
        }

        function showModal(pokemon) {
            modalContainer.innerHTML = " ";
            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add("modal-close");
            closeButtonElement.innerText = 'X'
            closeButtonElement.addEventListener('click', hideModal);

            let titleElement = document.createElement('h2');
            titleElement.innerText = pokemon.name;

            let contentElement = document.createElement('p');
            contentElement.innerText = pokemon.height;

            let secondElement = document.createElement('p');
            pokemon.types.forEach((type, index) => {
                if (index === pokemon.types.length -1) {
                    secondElement.innerText = type.type.name;
                } else {
                    secondElement.innerText = type.type.name + ", ";
                }
            })

            let imageElement = document.createElement('img');
            imageElement.classList.add("image-class");
            imageElement.setAttribute ('src', pokemon.imageUrl);

            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modal.appendChild(secondElement);
            modal.appendChild(imageElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add("is-visible")
        }

        function hideModal () {
            modalContainer.classList.remove("is-visible");
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains("is-visible")) {
                hideModal();
            }
        });

        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        return {
            add: add,
            getAll: getAll,
            addListItem: addListItem,
            loadList: loadList,
            loadDetails: loadDetails,
            showDetails: showDetails,
            showModal: showModal,
            hideModal: hideModal
        };
})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
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