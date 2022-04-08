const $pokedex = document.getElementById('.pokedex');

//make a fetch call to PokeAPI
//to get list of pokemon

//using the then method to get the data


// for NASA's api
// fetch('https://api.nasa.gov/planetary/apod?api_key=O0gbZLaow9yxJj3quNdulNVd0oZhknUVE4W4NrfW')
//     .then(function(response) {
//         //request was successful
//         return response.json();
//     })
//     .then(function(json) {
//         //get the data
//         console.log(json);
//     })

//for the pokemon api
fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(function(response) {
        //request was successful
        return response.json();
    }
    )
    .then(function(json) {
        //get the data
        // console.log(json);
        //pokemon data is in the json.results


        const html = []

        for (const pokemon of json.results) {
            html.push(`<a href="#" class="list-group-item list-group-item-action">
            ${pokemon.name}
            </a>`)

        }
        $pokedex.innerHTML = html.join('')
    })