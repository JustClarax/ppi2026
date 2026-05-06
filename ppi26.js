// #Aula 06/05 - Introdução do JavaScript
// Ativar o formatador Prettier
// ALT + SHIFT + F
console.log("Bem-vindos a PPI!");

// Váriaveis
//var name = 'João';
let name = "João"; //variável minemônica = o nome é associado ao que a vari armazena
let age = 17;
let isStudent = true;

const PI = 3.14; //Constantes Globais/Hardcoded: Valores que são conhecidos antes mesmo do código rodar e que nunca mudam, como fórmulas matemáticas, configurações de sistema ou limites (ex: PI, PORTA_SERVIDOR, LIMITE_TENT
// PI = 4;
console.log(PI); //seta pra cima no teclado para aparecer no terminal

// Operadores Aritméticos
let x = 5 + 5; // soma
let y = "5" + 5; // concatenação
let z = "Hello" + 5;

console.log(x**2, y, z); // ** potencia
console.log(typeof x); //dizer o tipo da variavel

// Operadores relacionais
console.log('5' !=5); // Diferença
console.log('5' == 5); // Compara tipo OU valor
console.log('5' === 5); // Compara tipo E valor

// Operadores de incremento
x = x++; //(x+1)
console.log(x);