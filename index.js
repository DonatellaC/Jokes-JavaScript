// ******************** JOKES ********************

const joke = document.getElementById("joke");
const next_joke = document.getElementById("next-joke");

const joke = document.getElementById("joke");
const next_joke = document.getElementById("next-joke");

//API
const apiJoke = "https://icanhazdadjoke.com/";

next_joke.addEventListener("click", generateJoke);

async function generateJoke() {
    //call the API

    const response = await fetch(apiJoke, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const data = await response.json();

    const listJokes = data.joke;

    //set the new joke
    joke.innerHTML = ' " ' + listJokes + ' " ' ;
    console.log(listJokes);
}

generateJoke();

