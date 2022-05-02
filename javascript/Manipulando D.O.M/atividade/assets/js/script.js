function changeClasses(){
    botao.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);

    changeText();
} 

function changeText(){
    const darkMode = "Dark Mode";
    const lightMode = "Light Mode";
    if(botao.classList.contains(darkModeClass)){
        botao.innerHTML =  lightMode;
        header.innerHTML = lightMode + " ON";
        return;
    }
    botao.innerHTML = darkMode;
    header.innerHTML = darkMode + " ON"
}

const darkModeClass = "dark-mode";
const botao = document.getElementById("mode-selector");
const header = document.getElementById("page-title");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

botao.addEventListener("click", changeClasses);
