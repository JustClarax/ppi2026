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

console.log(x ** 2, y, z); // ** potencia
console.log(typeof x); //dizer o tipo da variavel

// Operadores relacionais
console.log("5" != 5); // Diferença
console.log("5" == 5); // Compara tipo OU valor
console.log("5" === 5); // Compara tipo E valor

// Operadores de incremento
x = x++; //(x+1) //incremento apos o retorno do valor
console.log(x);

// Operadores Lógicos - && (AND), || (OR), ! (NOT)
let isExpression = (true && 5 + 2 * 3 < 10) || false;

//if...else
//if (condition) {
// condition === true

//} else {
// condition === false
//}

// Template Strings
let text = `React é 'tudo de bom!'\\
Programar é minha vida!/
Eu amo o IFRN`;
console.log(text); //pode tudo! e tem quebra de linha automatica

//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
//}

// Array
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.lenght); //Tamanho

console.log(fruits[0]); // Posição 0

fruits.push("Kiwi"); // Insere elemento no final da lista
console.log(fruits);

console.log(fruits.pop()); // Remove e retorna o ultimo elemento
console.log(fruits);

console.log(fruits.shift()); // Remove e retorna o primeiro elemento
console.log(fruits);

console.log(fruits);

// Insere elemento no começo da lista
fruits.unshift("Lemon");
console.log(fruits);

// Argumento 1 posição
// Argumento 2 - qts elementos serão removidos
// Argumento 3 - lista de elementos que serão inseridos
fruits.splice(2, 0, "Kiwi");
console.log(fruits);

fruits.splice(2, 1);
console.log(fruits);

// Desafio - substituir 'Apple' por Kiwi
fruits.splice(2, 1, "Kiwi");
console.log(fruits);

//Busca índice do elemento 'Kiwi'
let index = fruits.indexOf("Kiwi");
console.log(index);

fruits.splice(index, 1, "Apple");
console.log(fruits);

// Ordem crescente
fruits.sort(); //toSorted()
console.log(fruits);

//Ordem decrescente
fruits.reverse(); //toReversed()
console.log(fruits);

let fruitsSort = fruits.toSorted(); // Não altera array
console.log(fruits);
console.log(fruitsSort);

let fruitsReverse = fruits.toReversed(); // Não altera array
console.log(fruits);
console.log(fruitsReverse);

const numbers = [45, 4, 9, 16, 25];
console.log(numbers);

// Desafio - criar um array "numbers2" que duplique os valores de 'numbers' * 2
// Output: [90, 8, 18, 32, 50]

const numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
  numbers2.push(numbers[i] * 2);
}

console.log(numbers);
console.log(numbers2);

function myFunction(value, index, array) {
  return value * 2;
}

const numbersMap = numbers.map(myFunction);
console.log(numbersMap);

console.log(numbers.map((number) => number * 2));

console.log(numbers.toSorted((a, b) => a - b)); //C
console.log(numbers.toSorted((a, b) => b - a)); //D

numbers.sort((a, b) => a - b);
// Maior valor
console.log("Maior =", numbers[numbers.length - 1]);
// Menor valor
console.log("Menor =", numbers[0]);

// **********************************
// Aula 13/05 - Funções, array destructuring, spread operator
console.log(fruits);

const fruits2 = ["Kiwi", "Avocado"];
console.log([...fruits2, "Grape"]);

// Spread - ...
const fruits3 = [...fruits, ...fruits2];
console.log(fruits3);

// DESAFIO - Exibir todas as frutas que comecem
// com a letra A
const out = [];
const letra = "a";

// for (let i = 0; i < fruits3.length; i++) {
//   const fruit = fruits3[i];
//   //toLowerCase - minúscula, toUpperCase - maiúscula
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// }

// fruits3.map((fruit) => {
//   if (fruit[0].toLowerCase() === letra) {
//     out.push(fruit);
//   }
// });

// find - retorna a primeira ocorrência,
// de acordo com a condição
let outFind = fruits3.find((fruit) => fruit[0].toLowerCase() === letra);
console.log(outFind);

// filter - retorna TODAS as ocorrências,
// de acordo com a condição
let outFilter = fruits3.filter((fruit) => fruit[0].toLowerCase() === letra);
console.log(outFilter);

// DESAFIO - Exibir o valor da soma de todos os
// números do array 'numbers'

console.log(numbers);

// map
let soma = 0;
numbers.map((number) => {
  soma += number;
});
console.log(soma);

// reduce
console.log(numbers.reduce((soma, number) => soma + number));

// Object
const pessoa = {
  nome: "Zé Vaqueiro",
  idade: 25,
  profissao: "Cantor/Compositor",
};

console.log(pessoa.nome);
console.log(pessoa["nome"]);
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

const pessoa2 = { ...pessoa, hobby: "Vaquejada" };
console.log(pessoa2);

// Atribuição por desestruturação
const { nome, idade } = pessoa2;
console.log(nome, idade);

// Construtor - Protótipo de Objeto
function Product(name, sto, ram, price, qty, category) {
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product("iPhone", 256, 16, 5000, 10, "Celular");
const p2 = new Product("iPad", 512, 16, 8000, 20, "Tablet");
const p3 = new Product("Macbook", 1024, 24, 15000, 30, "Notebook");
const p4 = new Product("iPhone Pro Max", 256, 16, 7000, 15, "Celular");
const p5 = new Product("iPad Pro", 512, 16, 10000, 25, "Tablet");
const p6 = new Product("Macbook Pro", 1024, 24, 25000, 35, "Notebook");

const estoque = [
  { ...p1 },
  { ...p2 },
  { ...p3 },
  { ...p4 },
  { ...p5 },
  { ...p6 },
];
console.log(estoque);

/* DESAFIO 1

  a) Valor total de todos os produtos em estoque
  b) Ordene os produtos por nome (crescente/descrescente)
  c) Ordene os produtos por preço (crescente/descrescente)
  d) Filtre produtos de acordo uma categoria
*/

/*d)
for (let i = 0; i < estoque.length; i++) {
  const element = estoque[i];
  
}
if (Product.category === categoria) {

  console.log(Product);
}
*/

//a)
const valorTotal = estoque.reduce((total, produto) => {
  return total + produto.price * produto.qty;
}, 0);

console.log("Valor total:", valorTotal);

//b)
console.log(
  [...estoque].sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  }),
);

//c)
console.log([...estoque].sort((a, b) => b.price - a.price));


//d)
for (let i = 0; i < estoque.length; i++) {
  const element = estoque[i];

  if (element.category === "Celular") {
    console.log("Celular:", element);
  }

  if (element.category === "Tablet") {
    console.log("Tablet:", element);
  }

  if (element.category === "Notebook") {
    console.log("Notebook:", element);
  }
}
