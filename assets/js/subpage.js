/* ==================== NAV ==================== */
// Sub pages toggle menu icon switch
const navIcon2 = document.getElementById('nav-icon2');

navIcon2.addEventListener('click', () => {
    if (navIcon2.src.match('../img/icon_burger.PNG')){
        navIcon2.src = '../img/icon_close.PNG'
    } else {
        navIcon2.src = '../img/icon_burger.PNG'
    };
})
