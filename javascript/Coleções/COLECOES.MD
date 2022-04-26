# Coleções Chaveadas

## Map

- Características:

    - Coleção de arrays no formato [chave,valor]
    - Iterado por loop for...of
    - Exemplo de declaração:
        
        > const firstMap = new Map()

- Argumentos do Map:

    - clear: clear()
    - constructor: Map()
    - delete: delete()
    - entries: entries()
    - forEach: forEach()
    - get: ()
    - has: has()
    - keys: keys()
    - set: 
        >  size(...)
    - values: value()
    - Symbol(Symbol.iterator): entries()
        >  Symbol(Symbol.toStringTag): Map
    - Get size: sizer()
    - ``__proto__``: Object

- Adicionar:
    
    > firstMap.set('uva', 'fruta')

- Ler:

    > firstMap.get("uva")

- Deletar:
    > firstMap.delete("uva")

## Set

    Estruturas que armazenam valores únicos, ou seja, que não se repetem nunca.

- Declaração:

    > const firstSet = new Set()

- Adicionar:

   > firstSet.add(1)

   > firstSet.add(6)

- Consultar:

    > firstSet.has(6) 

    > //true

- Deletar:

    > firstSet.delete(6)

## Set vs Array
 - Possui valores únicos

- Consulta-se as propriedades pela propriedade size em vez  da propriedade lenght
    
- Não possui os métodos map, filter, reduce, etc.

