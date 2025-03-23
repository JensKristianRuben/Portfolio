function createMainContent() {
    const form = document.createElement("form");
    form.id = "weeksLeftForm";

    const sliderInput = document.createElement("input");
    sliderInput.id = "sliderInput";
    sliderInput.type = "range";
    sliderInput.value = "64";
    sliderInput.max = 64;
    sliderInput.min = 4;

    sliderInput.addEventListener("input", () => {
        choosenAge.innerText = sliderInput.value;
    })

    const choosenAge = document.createElement("div");
    choosenAge.id = "choosenAge";
    choosenAge.innerText = "64"

    const genderInput = document.createElement("input");
    genderInput.type = "hidden";
    genderInput.id = "genderInput";
    genderInput.name = "gender";

    const genderDiv = document.createElement("div");
    genderDiv.id = "genderDiv";
    const maleDiv = document.createElement("div");
    const femaleDiv = document.createElement("div");
    maleDiv.id = "maleDiv";
    femaleDiv.id = "femaleDiv";
    maleDiv.classList.add("genderBox")
    femaleDiv.classList.add("genderBox");
    maleDiv.innerText = "Mand"
    femaleDiv.innerText = "Kvinde"
    maleDiv.setAttribute("data-value", "male")
    femaleDiv.setAttribute("data-value", "female")

    maleDiv.addEventListener("click", () => {
        femaleDiv.classList.remove("clickedGenderBox")
        maleDiv.classList.add("clickedGenderBox");
        genderInput.value = "male";
    })
    femaleDiv.addEventListener("click", () => {
        maleDiv.classList.remove("clickedGenderBox")
        femaleDiv.classList.add("clickedGenderBox");
        genderInput.value = "female";
    })

    const button = document.createElement("button");
    button.id = "weeksLeftButton";
    button.type = "submit"
    button.innerText = "Se resultat";

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = {
            age: sliderInput.value,
            gender: genderInput.value
        };

        if (!data.gender) {
            maleDiv.classList.add("shake");
            femaleDiv.classList.add("shake");

            setTimeout(() => {
                maleDiv.classList.remove("shake");
                femaleDiv.classList.remove("shake");
            }, 500);

            return
        }

        console.log("Form data:", data);
    });

    genderDiv.appendChild(maleDiv);
    genderDiv.appendChild(femaleDiv);

    form.appendChild(sliderInput);
    form.appendChild(choosenAge);
    form.appendChild(genderDiv);
    form.appendChild(genderInput);
    form.appendChild(button);

    document.body.appendChild(form);
}

createMainContent()