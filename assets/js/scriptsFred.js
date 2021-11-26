const button = document.getElementById("mode-selector");
const body = document.getElementsByTagName('body')[0]
const h1 = document.getElementById('page-title')
const footer = document.getElementsByTagName('footer')[0]
const darkModeClass = 'dark-mode'

function changeMode() {
    changeAll()
    changeText()
}

function changeAll() {
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    button.classList.toggle(darkModeClass);
}

function changeText() {
    const LightMode = 'LIGTH MODE'
    const DarkMode = 'DARK MODE'
    if (body.classList.contains(darkModeClass)) {
        h1.innerHTML = LightMode + ' OFF'
        button.innerHTML = LightMode
        return
    }
    h1.innerHTML = LightMode + ' ON'
    button.innerHTML = DarkMode
}


button.addEventListener('click', changeMode);