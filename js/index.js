// Your code goes here
const navBar = document.querySelectorAll('.nav-link');
navBar.forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = 'scale(1.3)';
        item.style.transition = 'transform 1s'
    })
})
navBar.forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 1s'
    })
})

const btns = document.querySelectorAll('.btn');
btns.forEach(item => {
    item.addEventListener('click', e => {
        item.style.color = "#17A2B8"
        item.style.backgroundColor = "#FFFFFF"
    })
})


const logo = document.querySelector('.logo-heading');
const navContainer = document.querySelector('.nav-container');
const newAnchor = document.createElement('a');
newAnchor.setAttribute('href', 'https://lambdaschool.com/')
logo.addEventListener('mouseenter', e => {
    newAnchor.textContent = 'Fun Bus'
    newAnchor.classList.add('logo-heading')
    newAnchor.style.fontFamily = 'Indie Flower, cursive';
    newAnchor.style.transform = 'scale(4.0)';
    newAnchor.style.margin = '.25% 0 0 6.75%';
    newAnchor.style.textDecoration = 'none';
    newAnchor.style.color= 'black';
    navContainer.prepend(newAnchor);
    logo.remove();
})

navBar.forEach(item => {
    item.addEventListener('mouseenter', e => {
        item.setAttribute('href', 'https://lambdaschool.com/')
    })
})

const headerImg = document.querySelector('header img');
headerImg.addEventListener('click', e => {
    headerImg.style.transform = 'scale(2.0)'
})
headerImg.addEventListener('mouseleave', e => {
    headerImg.style.transform = 'scale(1.0)'
})

window.addEventListener('resize', e => {
    const pText = document.querySelectorAll('.content-section');
    pText.forEach(item => {
        item.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
})

const boatImg = document.querySelector('.content-destination img');
boatImg.addEventListener('drag', e => {
    boatImg.style.transform = 'scale(2.0)'
    boatImg.style.transition = 'transform 1s'
})

// const bodyPage = document.querySelectorAll('body');
// bodyPage.forEach(items => {
//     items.addEventListener('keydown', e => {
//         items.style.backgroundColor = 'blue';
//     })
    
//     items.addEventListener('keyup', e => {
//         items.style.backgroundColor= 'white';
//     })
// })

const footerAdjust = document.querySelector('footer');
footerAdjust.addEventListener('keydown', e => {
    footerAdjust.styles.backgroundColor = 'red !important';
})


