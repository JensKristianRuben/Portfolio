function createMainContent() {
    const form = document.createElement("form");
    form.id = "weeksLeftForm";

    const sliderInput = document.createElement("input");
    sliderInput.id = "sliderInput";
    sliderInput.type = "range";
    sliderInput.value = "34";
    sliderInput.max = 64;
    sliderInput.min = 4;

    sliderInput.addEventListener("input", () => {
        choosenAge.innerText = sliderInput.value;
    })

    const choosenAge = document.createElement("div");
    choosenAge.id = "choosenAge";
    choosenAge.innerText = "34"

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
            age: Number(sliderInput.value),
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
        } else {
            generateIllustration(data.age, data.gender)
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

function generateIllustration(age, gender) {

    const expectedYearsMap = new Map([
        [64, {male: 70.3, female: 74.6}],
        [63, {male: 70.1, female: 74.7}],
        [62, {male: 70.3, female: 74.9}],
        [61, {male: 70.6, female: 75.4}],
        [60, {male: 70.7, female: 75.6}],
        [59, {male: 70.8, female: 75.7}],
        [58, {male: 70.7, female: 75.9}],
        [57, {male: 70.7, female: 76.1}],
        [56, {male: 70.8, female: 76.3}],
        [55, {male: 70.8, female: 76.6}],
        [54, {male: 71.1, female: 76.8}],
        [53, {male: 71.1, female: 76.8}],
        [52, {male: 71.2, female: 77.1}],
        [51, {male: 71.5, female: 77.5}],
        [50, {male: 71.3, female: 77.4}],
        [49, {male: 71.2, female: 77.3}],
        [48, {male: 71.1, female: 77.2}],
        [47, {male: 71.4, female: 77.4}],
        [46, {male: 71.5, female: 77.5}],
        [45, {male: 71.5, female: 77.5}],
        [44, {male: 71.6, female: 77.5}],
        [43, {male: 71.6, female: 77.5}],
        [42, {male: 71.8, female: 77.6}],
        [41, {male: 71.8, female: 77.7}],
        [40, {male: 72.0, female: 77.7}],
        [39, {male: 72.0, female: 77.7}],
        [38, {male: 72.2, female: 77.8}],
        [37, {male: 72.5, female: 77.9}],
        [36, {male: 72.5, female: 77.8}],
        [35, {male: 72.6, female: 77.9}],
        [34, {male: 72.7, female: 77.9}],
        [33, {male: 72.9, female: 78.0}],
        [32, {male: 73.3, female: 78.4}],
        [31, {male: 73.7, female: 78.7}],
        [30, {male: 74.0, female: 78.8}],
        [29, {male: 74.3, female: 79.0}],
        [28, {male: 74.5, female: 79.2}],
        [27, {male: 74.7, female: 79.2}],
        [26, {male: 74.9, female: 79.5}],
        [25, {male: 75.2, female: 79.9}],
        [24, {male: 75.6, female: 80.2}],
        [23, {male: 75.9, female: 80.4}],
        [22, {male: 75.9, female: 80.5}],
        [21, {male: 76.3, female: 80.7}],
        [20, {male: 76.5, female: 80.8}],
        [19, {male: 77.1, female: 81.2}],
        [18, {male: 77.3, female: 81.6}],
        [17, {male: 77.9, female: 81.9}],
        [16, {male: 78.0, female: 82.0}],
        [15, {male: 78.5, female: 82.7}],
        [14, {male: 78.6, female: 82.5}],
        [13, {male: 78.8, female: 82.8}],
        [12, {male: 79.0, female: 82.9}],
        [11, {male: 79.0, female: 82.9}],
        [10, {male: 79.3, female: 83.2}],
        [9, {male: 79.5, female: 83.6}],
        [8, {male: 79.6, female: 83.4}],
        [7, {male: 79.4, female: 83.1}],
        [6, {male: 79.6, female: 83.4}],
        [5, {male: 79.4, female: 83.1}],
        [4, {male: 79.6, female: 83.4}]
    ]);

    const expectedYears = expectedYearsMap.get(age)?.[gender];

    document.body.innerHTML = "";

    const outerDiv = document.createElement('div');
    outerDiv.id = "outerDiv";


    const weeksLived = age * 52
    const weeksLeftToLive = (expectedYears - age) * 52

    const weeksLivedNumber = document.createElement("div");
    weeksLivedNumber.classList.add("numberDiv");
    weeksLivedNumber.innerText = 0;
    const weeksLeftNumber = document.createElement("div");
    weeksLeftNumber.classList.add("numberDiv");
    weeksLeftNumber.innerText = 0;

    const weekstext1 = document.createElement("div");
    weekstext1.classList.add("numberDiv");
    weekstext1.innerText = "Uger levet";
    const weekstext2 = document.createElement("div");
    weekstext2.classList.add("numberDiv");
    weekstext2.innerText = "Uger tilbage";

    const illustrationDiv = document.createElement("div");
    illustrationDiv.id = "illustrationDiv";

    document.body.appendChild(outerDiv);
    outerDiv.appendChild(weeksLivedNumber);
    outerDiv.appendChild(weekstext1);
    outerDiv.appendChild(weeksLeftNumber);
    outerDiv.appendChild(weekstext2);
    outerDiv.appendChild(illustrationDiv)

    function createWeekDiv() {
        const weeksLivedDiv = document.createElement("div");
        weeksLivedDiv.classList.add("weeksLivedDiv");
        illustrationDiv.appendChild(weeksLivedDiv);
    }

    function createWeeksLeftDiv() {
        const weeksLeftDiv = document.createElement("div");
        weeksLeftDiv.classList.add("weeksLeftDiv");
        illustrationDiv.appendChild(weeksLeftDiv);
    }

    function loopWithTimeout(i, numberOfDivsToGenerate, callback, numberElement, onComplete) {
        if (i < numberOfDivsToGenerate) {
            setTimeout(() => {
                callback(i);
                numberElement.innerText = i;
                loopWithTimeout(i + 1, numberOfDivsToGenerate, callback, numberElement, onComplete);
            }, 10);
        } else if (onComplete) {
            onComplete();
        }
    }

    loopWithTimeout(0, weeksLived, createWeekDiv, weeksLivedNumber, () => {
        loopWithTimeout(0, weeksLeftToLive, createWeeksLeftDiv, weeksLeftNumber);
    });
    createEndResult()
}

function createEndResult(){
    // todo: lav år, måneder, uger, dage, minutter, sekunder når illustrationen er færdig
    const yearsLeftDiv = document.createElement("div");
    yearsLeftDiv.classList.add("endResultDiv");
    const yearsLeft = document.createElement("div");
    const yearsLeftText = document.createElement("div");
    yearsLeft.innerText = 0;
    yearsLeftText.innerText = "År"

    yearsLeftDiv.appendChild(yearsLeft)
    yearsLeftDiv.appendChild(yearsLeftText);
    document.body.appendChild(yearsLeftDiv);
}

createMainContent()