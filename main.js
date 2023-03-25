let form = document.querySelector("#form");
let valor = document.querySelector("#valor");
let resultado = document.querySelector("#resultado");
let numero = Math.floor((Math.random() * 100) + 1);
let contagem = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    contagem += 1;

    if(valor.value > numero){
        resultado.innerHTML = "Your guess is too high. Try again.";
    }else if(valor.value < numero){
        resultado.innerHTML = "Your guess is too low. Try again.";
    }else if(valor.value == numero){
        resultado.innerHTML = `You got it! It took you ${contagem} guesses.`;
    }
})