# REDUCE

   Executa uma função em todos os elementos do array, retornando um valor único. Esse valor pode ser um array, uma string ou qualquer outro valor.

## Sintaxe


 > array.reduce(callbackFn, initialValue )

- Callback: função a ser executada a partir do acumulador

- initialValue(opcional): valor em que o retorno final vai atuar

## Sintaxe da função callbackFn

> const callbackFn = function(acumulator, currentValue, indes, array){

}

- acumulador/prevValue: acumulador de todas as chamadas de callbackFn

- curretValue: elemento atual sendo acessado pela função

- Exemplo de caso de uso: somar todos os valores de um array