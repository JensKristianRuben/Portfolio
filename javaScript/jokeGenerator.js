createJokeShowingAndButton();

function getJoke() {
    return fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.joke);
            return data.joke;
        });
}

function createJokeShowingAndButton() {
    const jokeDiv = document.createElement("div");
    jokeDiv.id = "jokeDiv";

    const jokeButton = document.createElement("button");
    jokeButton.id = "jokeButton";
    jokeButton.addEventListener("click", showJoke);
    jokeButton.innerHTML = "Se joke";

    document.body.appendChild(jokeDiv);
    document.body.appendChild(jokeButton);
}

async function showJoke() {
    const joke = await getJoke();
    document.getElementById('jokeDiv').innerHTML = joke;
}
