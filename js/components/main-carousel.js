//1 acessar a janela(browser)
//2 pegaro html todo
//3 pegar o botão
//4 saber que esta sendo clicado no botao


const btnRight = document.querySelector('.button-arrow.-right')
const btnLeft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements')
let pixels = 10



btnRight.addEventListener('click', function () {
    pixels = pixels + 100
    elements.style = `transform: translateX(${pixels}px)`
})

btnLeft.addEventListener('click', function () {
    pixels = pixels - 100
    elements.style = `transform: translateX(${pixels}px)`
})
