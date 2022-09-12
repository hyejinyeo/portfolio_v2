/* ==================== NAV ==================== */
// Toggle menu show
const hamburger = document.getElementById('nav-toggle'),
      navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
})

// Toggle menu hidden after clicking a nav link
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navUl.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/* ==================== HOME ==================== */
document.addEventListener("mousemove", parallax);

function parallax(e){
    document.querySelectorAll(".sparkle").forEach(function(move){
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value);
        let y = (e.clientY * moving_value);

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
    });
}


