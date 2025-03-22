function createMainContent(){
    const form = document.createElement("form");
    form.id = "weekLeftForm";

    const sliderInput = document.createElement("input");
    sliderInput.id = "sliderInput";
    sliderInput.type = "range";
    sliderInput.max = 64;
    sliderInput.min = 4;

    sliderInput.addEventListener("input", () =>{
        choosenAge.innerText = sliderInput.value;
    })

    const choosenAge = document.createElement("div");
    choosenAge.id = "choosenAge";

    const button = document.createElement("button");
    button.id = "weeksLeftButton";
    button.type = "submit"

    form.appendChild(sliderInput);
    form.appendChild(choosenAge);
    form.appendChild(button);

    document.body.appendChild(form);
}
createMainContent()