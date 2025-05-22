// exercicio 01 
// Solicite ao usuário para inserir um número representando um dia da semana (1 a 7) e mostre o nome do dia correspondente.
import rl from 'readline-sync';

let dia = rl.questionInt("Informe um valor entre 1 e 7: ")
switch (dia) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda feira")
        break;
    case 3:
        console.log("terça feira")
        break;
    case 4:
        console.log("quarta feira")
        break;
    case 5:
        console.log("quinta feira")
        break;
    case 6:
        console.log("sexta feira")
        break;
    case 7:
        console.log("sabado")
        break;

    default:
        console.log("inválido")
        break;
}


// exercicio 2
// Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome do mês.
let mes = rl.questionInt("Informe um valor entre 1 a 12: ")
switch (mes) {
    case 1:
        console.log("janeiro")
        break;
    case 2:
        console.log("fevereiro")
        break;
    case 3:
        console.log("março")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("junho")
        break;
    case 7:
        console.log("julho")
        break;
    case 8:
        console.log("agosto")
        break;

    case 9:
        console.log("setembro")
        break;

    case 10:
        console.log("outubro")
        break;

    case 11:
        console.log("novembro")
        break;

    case 12:
        console.log("dezembro")
        break;


    default:
        console.log("inválido")
        break;
}


// exercicio 3
//Implementar um programa que simule uma calculadora. O usuário deverá informar dois valores e a operação desejada. Com auxílio de um switch deve ser computado e mostrado o resultado da operação.

let x = rl.questionFloat("Informe o primeiro valor: ")
let y = rl.questionFloat("Informe o segundo valor: ")
let op = rl.question("Escolha uma opção: \n[1] Soma \n[2] Subtração\n[3] Multiplicação \n[4] Divisão ")
switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x+y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x-y}`);
        break;
    case 3:
        console.log(`${x} x ${y} = ${x*y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x/y}`);
        break;
    default:
        console.log("inválido")
        break;
}

// exercicio 4
// Um funcionário irá receber um aumento de acordo com o seu categoria de bonificação (A,B,C e D). A tabela abaixo mostra o percentual de aumento de cada categoria: Faça um programa que leia a categoria de bonificação e o salário atual de um funcionário, em seguida calcule e imprima o seu novo salário. Use a instrução switch.
let salario = rl.questionFloat("Informe seu salário: ")
let cat = rl.question("Informe a categoria de bonificação: ")
let bonus = 0;
switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo salário: ${(salario+bonus).toLocateString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
        break;
    case 'B':
        bonus = salario * 0.10;
        console.log(`Novo salário: ${(salario+bonus).toLocateString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
        break;
    case 'C':
            bonus = salario * 0.15;
            console.log(`Novo salário: ${(salario+bonus).toLocateString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
            break;
    case 'D':
            bonus = salario * 0.20;
            console.log(`Novo salário: ${(salario+bonus).toLocateString('pt-BR', {style: 'currency', currency: 'BRL'})}.`)
            break;
            

    default:
        console.log("invalido")
        break;
}