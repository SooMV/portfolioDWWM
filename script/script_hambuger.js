window.onload = function () {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const navbar_link = document.querySelector('.navbar_link');
    
    let windowWidth = window.innerWidth; 

    if (innerWidth >= 200 && windowWidth <= 1024 ){
        
        menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        navbar_link.style.display ='none';
    });
    } else {
        menu_btn.style.display ='none';
        mobile_menu.style.display ='none';
    }
}