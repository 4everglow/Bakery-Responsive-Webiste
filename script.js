const barsBtn = document.querySelector('.fa-bars');
const timesBtn = document.querySelector('.fa-times');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

barsBtn.addEventListener('click', () => {
    barsBtn.classList.add('close');
    timesBtn.classList.add('open');
    navList.classList.add('open');
})

timesBtn.addEventListener('click', () => {
    barsBtn.classList.remove('close');
    timesBtn.classList.remove('open');
    navList.classList.remove('open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('open')) {
            barsBtn.classList.remove('close');
            timesBtn.classList.remove('open');
            navList.classList.remove('open');
        }
    })
})

//AOS ANIMATIONS
AOS.init({
    easing: 'ease',
    duration: 1000
});