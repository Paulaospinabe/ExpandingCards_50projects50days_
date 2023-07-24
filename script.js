const paneles = document.querySelectorAll('.panel')

paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        desactivar()                         /*Cree una funcion*/ 
        panel.classList.add('active')
    })
})

function desactivar() {
    paneles.forEach(panel => {
        panel.classList.remove('active')
    })
}