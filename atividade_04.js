import rl from 'readline-sync'; 

//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida, imprima a tabuada desse número usando um loop while.
let num = rl.questionInt("informe um número: ");
let cont = 1;
while ( cont <=10){
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}
//02. Escreva um programa que tem por finalidade calcular a Média Geral de uma Turma de alunos.
let num_alun = rl.questionInt("informe o número de alunos: ");
let somaMedias = 0;
let contadorALuno = 1;
while (contadorALuno <= num_alun){
    console.log(`Aluno ${contadorALuno}:`)

    let somaNotas = 0;
    let contadorBimestre = 1;

    while (contadorBimestre<=4){
        let nota = rl.questionInt(`informe a nota do ${contadorBimestre}° para o aluno ${contadorALuno}`)
        somaNotas = somaNotas + nota;
        contadorBimestre++;
    }
    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Média do aluno ${contadorALuno}: ${mediaAluno.toFixed(2)}`);
    contadorALuno++;
}
let mediaGeralTurma = somaMedias / num_alun;
console.log(`media geralda turma: ${mediaGeralTurma.toFixed(2)}`);
//01. a) Escreva um programa que simule um jogo de adivinhação onde o usuário deve adivinhar um número aleatório entre 1 e 100.
// O programa deve fornecer dicas sobre se o número digitado é maior ou menor que o número aleatório. O jogo deve continuar até que o usuário adivinhe corretamente.
const numAleatorio = Math.floor(Math.random()*100)+1;

let tentativa;

do{
    tentativa = rl.questionInt(`Tente adivinhar o número (entre 1 e 100): `)
    if (tentativa === numAleatorio) {
        console.log("Parábens você adivinhou o número.")
    } else if(tentativa + numAleatorio) {
        console.log("tente um numero maior");
    } else{
        console.log("tente um número menor.")
    }
}while(tentativa !== numAleatorio);
// Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o valor de imposto de renda a ser pago. Calcule o total de Imposto de Renda a ser pago conforme a tabela abaixo: Salário <= R$ 2.100,00 = isento Salário <= R$ 2.800,00 = 7,5% Salário <= R$ 3.750,00 = 15% Salário <= R$ 4.660,00 = 22.5% Salário > R$ 4.660,00 = 27.5%
for (let i = 1; i <10; i++) {
let nome = rl.question(`informe o nome da ${i}° pessoa: `)
let salario = rl.questionFloat(`informe o sálario de ${nome}: `)

let ir = 0;
if (salario <= 2100) {
    ir = 0;
} else if (salario <= 2800){
    ir = salario = 0.075;
}else if (salario <= 3750) {
    ir = salario *0.15;
} else if (salario <= 4660){
    ir = salario * 0.225;
} else {
    ir = salario * 0.275
}
console.log(`\n--- Imposto de Renda Devido---`);
console.log(`Nome ${nome} \n Imposto de renda: R$ ${ir.toFixed(2)}\n`)
}
//For in e for of - Exercícios
const pessoa = {
    nome: "Carlos Eduardo Dos Santos",
    dtNasc: "22/02/2002",
    cpf: "046.984.582-18",
    sexo: 'M'

}
console.log(pessoa)
console.log("nome: " + pessoa.nome);
for(const key of pessoa){
    console.log(`${key}: ${pessoa[key]}`);
}
const cores =["branco", "azul", "verde", "preto", "roxo", "amarelo"];
for (const elemento of cores){
    valores += elemento +"", "";
}
console.log(cores[4]);