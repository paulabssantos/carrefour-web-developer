# O objeto Error

Criando um erro:

    new Erro(message, fileName, lineNumber)

> Todos os parâmetros são opcionais, porém fileName e lineNumber não são padrão e por isso alguns browsers podem não rodar essas propriedades.

Exemplo de declaração:

    const meuErro = new Error('Mensagem invalida');
    throw(meuErro);

O erro também pode ter um nome:

    const meuErro = new Error('Mensagem invalida');
    meuErro.name = 'InvalidMessage';
    
    throw(meuErro);