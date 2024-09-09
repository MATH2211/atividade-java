let numero = parseInt(prompt("digite um numero"));

if(!isNaN(numero)){
    if (numero % 2 === 0) {
        alert("o numero " + numero + " é par")
    }
    else{
        alert("O numero "+ numero + " é ímpar")
    }
}