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

    // Tilføjelse af skabelonen til at lave API kaldet
    const chooseJoke = document.createElement("div")
    chooseJoke.id = "chooseJoke";

    const categories = document.createElement("div")
    categories.id = "categories";

    const anyCategory = document.createElement("div");
    anyCategory.id = "anyCategory";
    anyCategory.classList.add("categoryWrapper");

    const anyLabel = document.createElement("label");
    anyLabel.id = "chooseAnyCategory";
    anyLabel.innerText = "Alle";
    anyLabel.classList.add("radioLabel");

    const chooseAnyCategory = document.createElement("input");
    chooseAnyCategory.type = "radio";
    chooseAnyCategory.id = "chooseAnyCategory";
    chooseAnyCategory.classList.add("roundRadioBtn");
    chooseAnyCategory.addEventListener("click", () => {
        chooseAnyCategory.checked = true;
        chooseDefaultCategory.checked = false;
    })

    const defaultCategory = document.createElement("div");
    defaultCategory.id = "defaultCategory";
    defaultCategory.classList.add("categoryWrapper");

    const defaultLabel = document.createElement("label");
    defaultLabel.id = "chooseDefailtCategory";
    defaultLabel.innerText = "vælg kategorier"
    defaultLabel.classList.add("radioLabel");

    const chooseDefaultCategory = document.createElement("input")
    chooseDefaultCategory.type = "radio";
    chooseDefaultCategory.classList.add("roundRadioBtn");
    chooseDefaultCategory.id = "chooseDefaultCategory";
    chooseDefaultCategory.addEventListener("click", () => {
        chooseDefaultCategory.checked = true;
        chooseAnyCategory.checked = false;
    })

    anyCategory.appendChild(anyLabel);
    anyCategory.appendChild(chooseAnyCategory);
    defaultCategory.appendChild(defaultLabel);
    defaultCategory.appendChild(chooseDefaultCategory);


    categories.appendChild(anyCategory);
    categories.appendChild(defaultCategory);

    chooseJoke.appendChild(categories);
    document.body.appendChild(chooseJoke);


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
