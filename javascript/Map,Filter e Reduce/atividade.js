
/*Pratique a sintaxe de multiplicação de números, uma vez utilizando 
o parâmetro this de um objeto criado por você, e depois sem ele.*/

// Map com this

const itau = {
    value: 1,
}

const caixa = {
    value: 2,
}

const bradesco = {
    value: 3,
}

const numeros = [1,2,3,4,5,6,7,8,9,10];

function multBancos(arr, thisArg){
    return arr.map(function (item){
        return item * this.value;
    },thisArg)
}

console.log("Itaú: " + multBancos(numeros,itau))
console.log("Caixa: " + multBancos(numeros,caixa))
console.log("Bradesco: " + multBancos(numeros,bradesco))

// Map sem this

function multArray(arr){
    return arr.map(function(item){
        return item * 4;
    });
}

console.log("O novo array é: " +  multArray(numeros));

//Filtre e retorne todos os números pares de um array.

function retornaPar(arr){
    return arr.filter(function(num){
        return num % 2 === 0;
    })
}

console.log("Os números pares do array são: " + retornaPar(numeros))

//Reduce

// Some todos os números de um array


function somaItens(arr){
    return arr.reduce(function(prev,current){
        return prev + current;
    })
}

console.log("A soma de todos os itens do array é: " + somaItens(numeros))

/*Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
 Calcule qual será o saldo final após subtrair todos os preços da lista enviada.*/

 const saldo = 100;

 const carrinho = [{
    pruduto: "nescau",
    preco: 6
},
{
    produto: "leite condensado",
    preco: 4
},
{
    produto: "margarina",
    preco: 2
},
{
    produto: "milho para pipoca",
    preco: 3
},
{
    produto: "coca-cola 1l",
    preco: 6
}

]

 function calculaSaldo(arr,saldo){
     return arr.reduce(function(prev,current){
        return prev - current.preco;
     },saldo)
 }

 console.log(calculaSaldo(carrinho,100))