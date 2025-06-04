import rl from 'readline-sync';
// 01. Crie uma função que receba uma string como parâmetro e retorne a mesma string com todas as letras em caixa alta.
let frase = rl.question("Informe o texto para ser convertido:")
//declaracao de função
function Maiuscula(texto){
    return texto.touppercase();

}
//expressao de funçao
const cxAlta = function (texto){
    return texto.toupperCase();
}
// função de seta
const tdMaiusculas = (texto => texto.toUpperCase())
console.log(tdMaiusculas(frase));
//02. Crie uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne uma string.
function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}


// 03. Crie uma função que receba dois números como parâmetros e retorne a soma deles.
function somarNumeros(a, b) {
  return a + b;
}

//04. Crie uma função que receba um valor e uma porcentagem como parâmetros. A função deve retornar o valor acrescido da porcentagem indicada.
function aplicarPorcentagem(valor, porcentagem) {
  return valor + (valor * (porcentagem / 100));
}

// 05. Desenvolva uma função que calcule o valor de um produto com desconto. A função deve receber o valor  original do produto e o percentual de desconto como parâmetros, e retornar o valor com desconto aplicado. Utilize essa função para calcular o valor final de diferentes produtos.
function aplicarDesconto(valorOriginal, percentualDesconto) {
  return valorOriginal - (valorOriginal * (percentualDesconto / 100));
}
// 06. Desenvolva uma função que calcule a
// área de um círculo. A função deve receber o
// raio como parâmetro e retornar a área
// calculada.
function calcularAreaCirculo(raio) {
  return Math.PI * raio * raio;
}

// 07. Desenvolva uma função que converta
// uma temperatura de Celsius para Fahrenheit.
// A função deve receber a temperatura em
// Celsius como parâmetro e retornar a
// temperatura convertida.
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// 08. Crie uma função que calcula o IMC. A
// função deve receber a altura e o peso como
// parâmetros e retornar o IMC.
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
// 09. Crie uma função que valide se uma senha atende aos
// critérios estabelecidos, como ter no mínimo 8 caracteres, pelo
// menos uma letra maiúscula, pelo menos uma letra minúscula e
// pelo menos um caractere especial.
function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return regex.test(senha);
}

// 10. Desenvolva uma função chamada validarCPF que recebe
// um CPF como uma string numérica e verifica se ele é válido de
// acordo com as regras de validação de CPF. A função deve
// retornar true se o CPF for válido e false caso contrário.
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let dig1 = 11 - (soma % 11);
  if (dig1 > 9) dig1 = 0;
  if (dig1 !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let dig2 = 11 - (soma % 11);
  if (dig2 > 9) dig2 = 0;
  return dig2 === parseInt(cpf.charAt(10));
}

// 11. Escreva uma função que informe o retorno de um
// investimento (montante) com base nos valores do capital
// inicial, tempo em meses e taxa de juros mensal, fornecidos
// pelo usuário.
// Use a fórmula: M = C * (1+i)^t
// Onde:
// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.
function calcularMontante(capital, taxaJuros, tempo) {
  let i = taxaJuros / 100;
  let montante = capital * Math.pow(1 + i, tempo);
  return montante.toFixed(2);
}
