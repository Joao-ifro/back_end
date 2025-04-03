let valor = 13.141516;
let text = "Meu primeiro projeto em JavaScript";
let ativo = true;
console.log(valor.toFixed(2)); // Arredonda o valor para duas casas decimais
console.log("tipo :" + typeof valor); // retorna o tipo da variavel
console.log(text.toUpperCase()); // converte o texto para maiúscula
console.log("tipo :" + typeof text); // Retorna o tipo da variavel
console.log(ativo.toString()); // converte para texto
console.log("tipo :" + typeof ativo); // retorna o tipo da variavel

let estados = ["São Paulo", "Minas Gerais", "Rondônia", "Acre"]
let marcasCarros = [];
marcasCarros.push("Toyota")
console.log(estados[2])
console.log("tamanho: "+ estados.length)
console.log("total letras: " + marcasCarros [0].length)
console.log(`estado: ${estados[1]}`); //interpolação

let usuario;
console.log(usuario);
//console.log(usuario.length);

let idade 
console.log(idade +1); // nan (Not a Number)

let nula = null;
//console.log(nula.length);
console.log(nula+1) // saira o valor 1 pq o null é 0. como numero..

//const aula = "JavaScript"; Essas duas linhas mostra que não é possivel mudar o valor de uma constante
//ula = "JS"

const aula = "JavaScript"; // constante definida
console.log(aula)