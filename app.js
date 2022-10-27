const express = require('express')
const path = require('path')

const app = express()
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hola')
})

app.listen(3000, () => {
    console.log('Server on port', port)
})


// const navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight

// const header = document.getElementById("header")
// const navbar__button = document.getElementsByClassName('navbar__button')[0]
// const navbarLinks = document.getElementsByClassName('navbar__links')[0]

// navbar__button.addEventListener('click', () => {
//     header.classList.toggle('active')
//     navbarLinks.classList.toggle('active')
//     navbar__button.classList.toggle('active')

// })

// //gsap


// gsap.registerPlugin(ScrollTrigger);


// const site_header = document.querySelector("header");

// const showAnimReverse = gsap.from(site_header, {
//     yPercent: -100,
//     paused: true,
//     duration: .5,
// }).progress(1);

// ScrollTrigger.create({
//     start: "top top-=" + 50,
//     end: 99999,
//     onUpdate: (self) => {
//         if (self.direction === -1) {
//             //showAnimReverse.reset();
//             showAnimReverse.duration(.3);
//             showAnimReverse.play();


//         } else {
//             showAnimReverse.duration(.5);
//             showAnimReverse.reverse();

//         }
//     }
// });