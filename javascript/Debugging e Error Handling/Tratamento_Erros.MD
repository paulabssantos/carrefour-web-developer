# Tratamento de Erros

## Throw

    Tendo como exemplo o código:
>


    function verificaPalindromo(string){
        if(!string) return "String Inválida";
        return string === string.split('').reverse.join('');
    }
    
    verificaPalindromo('');

>

Caso não seja uma string, a função retornará "String Inválida".

    Vamos ver um exemplo usando throw:

>

    function verificaPalindromo(string){
        if(!string) throw "String Inválida";
        return string === string.split('').reverse.join('');
    }
    
    verificaPalindromo('');

Nesse caso, utilizando o throw, a função retornará a mensagem "String Inválida" dentro de uma [estrtutura de erro](/throw.js).

## Try...catch

    
    Retorna um erro

[Clique para ver o exemplo](/try_catch.js)


## Finally

    Bloco que vai ser executado idenpendentemente de haver um erro ou não.

[Clique para ver o exemplo](/finally.js)

