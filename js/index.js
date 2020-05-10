// Your code goes here
const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.25)'
        button.style.backgroundColor = 'black'
    })
})

buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)'
        button.style.backgroundColor = '#17A2B8'
    })
})