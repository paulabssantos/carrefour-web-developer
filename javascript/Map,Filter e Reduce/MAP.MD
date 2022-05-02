# MAP

- Cria um novo array a partir de um array original

- Não modifica o array original

- Realiza operações em ordem

## Sintaxe  

> array.map(callback,thisArg)

- Callback: função a ser executada em cada elemento do array

- thisArg(opcional): valor 'this' dentro da função callback

## Map vs ForEach

- O valor de retorno é diferente 

Exemplo:

    const array = [1,2,3,4,5];
    array.map((item) => item * 2);
    
    retorno: [2,4,6,8,10]

    array.forEach((item) => item * 2);

    retorno: undefined