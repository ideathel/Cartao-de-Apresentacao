const botao = document.querySelector('.btn-1');
const fundo = document.querySelector('.container2');

botao.addEventListener('click', () => {
    if(fundo.classList.contains('escondido')){
        fundo.classList.toggle('escondido');
        botao.innerText = "Informações";
    } else {
        fundo.classList.toggle('escondido')
        botao.innerText = "Esconder Informações";
    }
})