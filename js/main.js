/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close')
    {
        this.parentNode.className='skills__content skills__open'
    }
}      

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]')
      tabContents= document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      

/*==================== SERVICES MODAL ====================*/


/*==================== PROJECT SWIPER  ====================*/
let swiperProject = new Swiper('.project__container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween:48,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },

    breakpoints:{
        568:{
            slidesPerView:2
        }
    }
  });
  

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav=document.getElementById('header')

    ////when the scroll is greater than 200 viewport height, add the scroll header class to the header tag
    if(this.scrollY >=80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp=document.getElementById('scroll-up');
    // when the scroll is higher than 560 viewpoint height , add the show-scroll to the a tag with the scroll 
    if(this.scrollY>=560)
    scrollUp.classList.add('show-scroll');
    else
    scrollUp.classList.remove('show-scroll');

}
window.addEventListener('scroll',scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton=document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='uil-sun' // uil-sun --- icon of sun

//previously selected topic (is user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon=()=> themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously chose the topic
if(selectedTheme){
    // If the validation is fullfilled , we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate or deactivate theme manually with the button
themeButton.addEventListener('click',()=>{
    // add or remove the dark icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon that user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

// contact me
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyRPj_ey9vOianEzCm5vL_EYhs0ROR5xXJQZF83B3ZZs_-5rBh82TXLg9EJ1I4y5boL/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for contacting me..! I will get back to you soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
