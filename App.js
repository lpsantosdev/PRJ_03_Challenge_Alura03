//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
alert("Challenge 3.1");
let varCount = 1;
while (varCount <= 10) {
    alert(varCount);
    varCount++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
alert("Challenge 3.2");
let varCountDown = 10;
while (varCountDown >= 0) {
    alert(varCountDown);
    varCountDown--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
alert("Challenge 3.3");
let varCountDownUser = prompt("Please insert a number and see, in the console, this number in a countdown until 0");
while (varCountDownUser >= 0) {
    console.log(varCountDownUser);
    varCountDownUser--;
}

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
alert("Challenge 3.4");
let varCountStop = 0;
let varCountFwdUser = prompt("Please insert a number and see, in the console, this number in a count forward from 0 until the number");
while (varCountStop <= varCountFwdUser) {
    console.log(varCountStop);
    varCountStop++;
}