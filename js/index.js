// Your code goes here

/// Convert NodeList forEach func to = Array forEach func
//NodeList.prototype.forEach = Array.prototype.forEach;

//////////////// `mouseover` ////////////////
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

//////////////// `focus` ////////////////
const NavFoc = document.querySelectorAll('.main-navigation').forEach(function(el) {

    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = 'skyblue';
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    })

}) 

const NavLink = document.querySelectorAll('.nav-link').forEach(function(el) {

    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = '#faa300';
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    })

})

const TopDiv = document.querySelectorAll('.intro').forEach(function(el) {

    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = 'purple';
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    })

})

const divs = document.querySelectorAll('.text-content').forEach(function(el) {

    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = 'gold';
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    })

})
const divs2 = document.querySelectorAll('.content-destination').forEach(function(el) {

    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = '#FF751F';
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    })

})
const divs3 = document.querySelectorAll('.destination').forEach(function(el) {

    el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = '#fa3834';
    })
    el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = '';
    })

})

//////////////// `select` ////////////////
const selectedNavLinks = document.querySelectorAll('nav a');
selectedNavLinks.forEach(function(item, idx){
    item.addEventListener('click', function(){
        event.target.style.backgroundColor = '#fa3834';
        event.preventDefault();
    });
});

//////////////// `dblclick` ////////////////
const hideImg = document.querySelectorAll('img').forEach(function(el) {

    el.addEventListener('dblclick', () => {
        el.style.transform = "scale(0)";
    })

})
//////////////// `wheel` ////////////////
const wheely = document.querySelector('body')
wheely.addEventListener('wheel', () => {
    wheely.style.backgroundColor = '#2a5717';
})

//////////////// `load` ////////////////
const rotateImgs = document.querySelectorAll('img')
rotateImgs.forEach(image => {
    image.addEventListener('load', () => {
        image.style.transform = 'rotate3d(1,1,1,360deg)';
        image.style.transition = '5s';
    })
})

//////////////// Event Propagation Prevention ////////////////
const body = document.querySelector('.home')
body.addEventListener('click', () => {
    body.style.backgroundColor = 'skyblue';
})


const dest = document.querySelectorAll('.destination')
dest.forEach(div => {
    div.addEventListener('click', (event) => {
        div.style.backgroundColor = 'purple';
        event.stopPropagation();
    })
})

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = 'orange';
        button.style.color = 'purple';
        event.stopPropagation();
    })
})


//////////////// preventDefault() ////////////////
const noRefresh = document.querySelectorAll('a')
noRefresh.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

