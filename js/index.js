// Your code goes here

/// Convert NodeList forEach func to = Array forEach func - Just Because :]
NodeList.prototype.forEach = Array.prototype.forEach;

////////////////////////////////////////////////////
//////////////// Start My Variables ////////////////
////    `mouseover` 
const buttons = document.querySelectorAll('.btn')
////    `wheel`
const wheely = document.querySelector('body')
////    `drag / drop`
const anchor = document.querySelector(".intro img")
anchor.title="- Double Click, Press a Key or Drag Me to see an effect -";
////    `load`
const rotateImgs = document.querySelectorAll('img')
////    `select`
const selectedNavLinks = document.querySelectorAll('nav a'); 
////    Event Propagation Prevention
const body = document.querySelector('.home')
const dest = document.querySelectorAll('.destination')
////    preventDefault()
const noRefresh = document.querySelectorAll('a')
//////////////// End My Variables //////////////////
////////////////////////////////////////////////////

//////////////// `mouseover` + `resize` ////////////////
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

//////////////// `keydown` ////////////////
document.addEventListener("keydown", event => {

    let keyDown = document.querySelector ("img");

    if(keyDown.style.transform == "scale(1)"){

        keyDown.style.transform = "scale(0)";

    }else{

        keyDown.style.transform = "scale(1)";

    }

});

//////////////// `wheel` ////////////////
wheely.addEventListener('wheel', () => {

    wheely.style.backgroundColor = '#2a5717';

})

//////////////// `drag / drop` ///////////////
document.querySelector(".intro img").addEventListener("dragstart", event => {

    if(event.target.style.filter != "blur(10px)"){

        event.target.style.filter = "blur(10px)";

        anchor.title="Ahh i'm blurry!";

    }else{

        event.target.style.filter = "blur(0px)";

        anchor.title;

    }
    
});

//////////////// `load` ////////////////
rotateImgs.forEach(image => {

    image.addEventListener('load', () => {

        image.style.transform = 'rotate3d(1,1,1,360deg)';

        image.style.transition = '5s';

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

//////////////// `resize` ////////////////
        ///// See Line 6: `mouseover` /////

//////////////// `scroll` ////////////////
document.querySelector(".logo-heading").addEventListener("wheel", event => {

    let colors = [

        "#4287f5", "#9e07f5", "#f50766", "#07d1f5",
        "#07f55e", "#d9f507", "#f55e07", "#f50707"

    ];

    let index = colors.indexOf(event.target.style.color);

    if(index == colors.length - 1) {

        event.target.style.color = colors[0];

    } else {

        event.target.style.color = colors[index + 1];

    }
});

//////////////// `select` ////////////////
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

//////////////// Event Propagation Prevention ////////////////
body.addEventListener('click', () => {

    body.style.backgroundColor = 'skyblue';

})

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
noRefresh.forEach(link => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

    })

})

//////////////// GSAP Stretch ////////////////
// Create new element w/ className for GSAP animation
let newTag = document.createElement('a');

newTag.textContent = "GSAP";

newTag.className = "GSAP"
////////////////////////////////////////

const newNavContent = document.querySelector('nav');

newNavContent.appendChild(newTag);
////////////////////////////////////////

let navChange = document.querySelectorAll('nav .GSAP');

navChange.forEach(function(currentValue){

  currentValue.style.color = 'red';

});
////////////////////////////////////////
function myFunction() {
    var para = document.createElement("P");
    para.innerHTML = "This is a paragraph.";
    document.getElementById("GSAPdiv").appendChild(para);
  }

function copyElementToClipboard(element) {
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
const GSAPnav = document.querySelectorAll('.GSAP').forEach(function(el) {

    el.addEventListener('click', () => {

        let GSAPloc = window.location.href = "GSAPStretch.html";

    })

}) 
