let ourHeader = document.querySelector('.header');
window.onscroll = function(){
    if (window.scrollY > 150){
        ourHeader.classList.add('nav-colored');
        // ourHeader.classList.remove('nav-colored');
    }
    else{
        ourHeader.classList.remove('nav-colored');
    }
}


// Side Bar JavaScript Code.

let closeBtn = document.getElementById('clo-btn');

let hamMenu = document.querySelector('.hamburger');

let sideBar = document.querySelector('.side-bar');

hamMenu.addEventListener('click',function(){
    sideBar.classList.add('show-side-bar');
});

closeBtn.addEventListener('click',function(){
    sideBar.classList.remove('show-side-bar');
});
