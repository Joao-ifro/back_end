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
