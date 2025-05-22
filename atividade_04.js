import rl from 'readline-sync'; 

//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
let num = rl.questionInt("informe um número: ");
let cont = 1;
while ( cont <=10){
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}