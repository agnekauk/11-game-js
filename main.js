function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let luckyNumber = rand(1, 100);
console.log(luckyNumber);
let count = 0;
let answer = document.createElement("p");
let counting = document.createElement("p2");
let forma = document.forms["guessNumber"];

function numcheck(lNum, gNum) {
    let result = "";
    if (luckyNumber === gNum) {
        result = "Very lucky guess! Congratulations!";
    } else if (luckyNumber < gNum) {
        result = "Your number is too big!";
    } else if (luckyNumber > gNum) {
        result = "Your number is too small!";
    }
    else { result = "Error" }
    return result;
}


forma.addEventListener("submit", function (e) {
    e.preventDefault();
    let guessing = +forma["number"].value;
    answer.textContent = numcheck(luckyNumber, guessing);
    count++;
    counting.textContent = count + " guesses were made.";
    forma.appendChild(answer);
    forma.appendChild(counting);
})

let calc = document.forms["calculator"];
let sum = document.createElement("p");

calc.addEventListener("submit", function (e) {
    e.preventDefault();
    let number1 = +calc["number1"].value;
    let number2 = +calc["number2"].value;
    sum.textContent = `Sum is: ${number1 + number2}`;
    calc.appendChild(sum);
})
// ---------

function getBMI(w, h) {
    return Math.floor(w / Math.pow(h, 2));
}

function evaluationOfBMI(index) {
    let result = "";
    if (index < 18.5) {
        result = "nepakankamas svoris";
    } else if (index >= 18.5 && index < 25) {
        result = "normalus svoris";
    } else if (index >= 25 && index < 30) {
        result = "antsvoris";
    } else if (index >= 30) {
        result = "nutukimas";
    }
    return result;
}
let kmiSkaiciuokle = document.forms["kmi-skaiciuokle"];
let atsakymas = document.createElement("p");

kmiSkaiciuokle.addEventListener("submit", function (e) {
    e.preventDefault();
    let weight = +kmiSkaiciuokle["weight"].value;
    let height = +kmiSkaiciuokle["height"].value;
    atsakymas.textContent = "Jūsų kūno masės indeksas yra " + getBMI(weight, height) + " - " + evaluationOfBMI(getBMI(weight, height));
    kmiSkaiciuokle.appendChild(atsakymas);
})
// --------------------------------------------------------------------------

let toDoList = document.forms["to-do-list"];
let sarasas = document.querySelector("ul");

toDoList.addEventListener("submit", function (e) {
    e.preventDefault();
    let work = document.createElement("li");
    let toDo = toDoList["list"].value;
    work.textContent = toDo;
    sarasas.appendChild(work);
})

let inputJob = document.querySelector('input[name ="list"]');
inputJob.addEventListener("focus", (e) => {
    e.target.style.background = "#d4cab0";
    inputJob.value = "";
})
inputJob.addEventListener("blur", (e) => {
    e.target.style.background = "";
})

