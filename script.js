const block = document.getElementById('border')

block.addEventListener('mouseenter', (event) => {
    const element = document.getElementById('one')
    console.log('курсор наведен')
    console.log(element)
    element.classList.add('hide-none')
})

block.addEventListener('mouseleave', (event) => {
    const element = document.getElementById('one')
    console.log('курсор выведен')
    element.classList.remove('hide-none')
})