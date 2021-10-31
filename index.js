const panel = document.querySelectorAll('.panel');

panel.forEach((panel)=> {
    panel.addEventListener('click', () => {
        removeActiveClassList()
        panel.classList.add('active')
    })
})

const removeActiveClassList = () => {
    panel.forEach((panel)=> {
        panel.classList.remove('active')
    })
}