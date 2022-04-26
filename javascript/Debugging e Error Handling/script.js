// Atividade Tratamento de Erros

function validarArray(arr, num){
    try{
        if(!arr && !num) 
            throw new ReferenceError("Parâmetros faltando");

        if(typeof arr !== 'object') 
            throw new TypeError("O array precisa ser do tipo object");

        if(typeof num !== 'number') 
            throw new TypeError("O argumento precisa ser um número");

        if (arr.length !== num) throw new RangeError("O tamanho do array e o número enviado são diferentes!");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um referenceError.");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Esse erro é um typeError.");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Esse erro é um rangeError.");
            console.log(e.message);
        }else{
            console.log("Erro inesperado: " + e);
        }
    }
}

console.log(validarArray([1,2],2));
