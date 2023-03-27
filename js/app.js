let myHeader = document.querySelector('.header');
window.onscroll = function(){
    if (window.scrollY > 150){
        myHeader.classList.add('nav-colored');
    }
    else{
        myHeader.classList.remove('nav-colored');
    }
}

// Below is the code of typewriter effect

const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Frontend Developer", "UI/UX Designer", "Gamer", "Learner..."];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
})

// End of Typewriter effect code.

// Side Bar JavaScript Code.

let closeBtn = document.getElementById('clo-btn');

let hamMenu = document.querySelector('.ham-bars');

let sideBar = document.querySelector('.side-bar');

// below code is for closing the nav-bar when any nav-item is clicked

let closeSideBar = document.querySelector('.side-bar-items').children;

let closeSideBarArr = Array.from(closeSideBar);

for(let indexofCSBA = 0; indexofCSBA<closeSideBarArr.length; ++indexofCSBA){
  closeSideBarArr[indexofCSBA].addEventListener('click',function(){
    sideBar.classList.remove('show-side-bar');
  })
}


hamMenu.addEventListener('click',function(){
    sideBar.classList.add('show-side-bar');
});

closeBtn.addEventListener('click',function(){
    sideBar.classList.remove('show-side-bar');
});

// Form Fixing ...

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

let copyrightYear = document.querySelector('.foot-para');

copyrightYear.innerHTML = "&copy; " + new Date().getFullYear() + " Harender Thakran - All Rights Reserved";