# Promisses

## Definição

Objeto de processamento assíncrono.

Seu valor é desconhecido. Pode ser **resolvida** ou **rejeitada**.

Possui 3 estados:

1. Pending - pendente

2. Fullfield - completada

3. Rejected - reijeitada

## Estrutura

    const myPromise = new Promise(resolve, reject){
        window.setTimeOut(() => {
            resolve('Resolvida!');
        }, 2000);
    });


# Async / Await

Existem  para definir funções assíncronas.  