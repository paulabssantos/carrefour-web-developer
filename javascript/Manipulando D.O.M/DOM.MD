# D.O.M

    Document Object Model

    Padrão de como acessar e modificar os elementos HTML de uma página.


## D.O.M vs B.O.M

    Browser Object Model


O Browser é composto pela window e seus objetos filhos. São eles:

- document;
- history;
- location;
- screen;
- navigator;

O D.O.M se refere ao objeto document

## Métodos

### Selecionando elementos de uma página

> document.getElementById('teste')

- Pega o elemento html com o id teste

> document.getElementsByTagName('li')

- Pega os elementos html da tag li

> document.getElementsByClassName('textos')

- Pega os elementos html que pertencem a classe textos

> document.querySelectorAll('.primeira-classe .segunda-classe')

- Pega os elementos html que pertencem às duas classes passadas como parâmetro

### Adicionar e Deletar

> document.creatElement(element)

Cria um elemento html

> document.removeChild(element)

Remove um elemento

> document.appendChild(element)

Adiciona um elemento

> document.replaceChild(new, old)

Substitui um elemento

### Manipulando D.O.M

- Classes

        Element.classList

        const meuElemento = document.getElementById("meu-elemento")


> meuElemento.classList.add("novo-estilo")

Adiciona a classe "novo-estilo".

> meuElemento.classList.remove("classe")

Remove a classe "classe".

> meuElemento.classList.toggle("dark-mode")

Adiciona a classe "dark-mode" caso ela não faça parte da lista e remove caso faça.

- CSS

        Acessando diretamente o CSS de um elemento.

> document.getElementsByTagName("p").style.color = "blue"

> document.getElementsByTagName("p").style.font-size = 14px

### Eventos

- **Eventos de mouse**

    - **mouseover:** quando a seta está em cima do elemento

    - **mouseout:** quando a seta sai do elemento

- **Eventos de clique**

    - **click:** um clique
    
    - **dbclick:** clique duplo

- **Eventos de atualização**

    - **change**

    - **load**

***Event Listener***

    No javascript, cria um evento a ser acionado no momento que o usuário executar determinada ação.

>

Exemplo:
> botao.addEventListener("click", outraFuncao)