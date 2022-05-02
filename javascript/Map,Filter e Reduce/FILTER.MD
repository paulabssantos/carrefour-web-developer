# FILTER

    Os itens de um array passam por um filtro e apenas aqueles que corresponderem a determinada condição são retornados em um novo array.

- Retorna um novo array

- Não modifica o array original


## Sintaxe

> array.filter(callback, thisArg)

- Callback: função a ser executada em cada elemento do array

- thisArg(opcional): valor 'this' dentro da função callback

Exemplo:

    const frutas = ["banana prata","banana pacovã","melancia","mamão"];

    frutas.filter((fruta) => fruta.includes("banana"))

    retorno: ["banana prata","banana pacovã"]