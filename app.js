var typed = new Typed(".text", {
    strings : ["Front End Developer"],
    typeSpeed : 50,
    startDelay : 4000,
    backDelay : 2000,
    fadeOut : true,
    loop : true
})


// const listItems = document.querySelectorAll('nav a');
// const sections = document.querySelectorAll('section');

// function activateNavOnScroll() {
//     sections.forEach((section, index) => {
//         const top = section.offsetTop - 50;
//         const bottom = top + section.clientHeight;

//         if (window.scrollY >= top && window.scrollY < bottom) {
//             listItems[index].classList.add('active');
//         } else {
//             listItems[index].classList.remove('active');
//         }
//     });
// }

// window.addEventListener('scroll', activateNavOnScroll);

// activateNavOnScroll();



const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".navs a");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navigationLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

function navs() {
    navigationLinks.forEach(function click(e) {
        e.addEventListener("click", event => {
            removeClass();
            event.target.classList.add("active");
        })
    })
}

navs();


//                                        ---- Burger ----


let burger = document.querySelector('.bars-burger');
let headerBurger = document.querySelector(".header-burger");
let navLinks = document.querySelector(".navbar-burger");
let navClick = document.querySelectorAll(".click");
const sectionAll = document.querySelectorAll('section');

function burgerMenu() {

    if (navLinks.style.display !== "none") {
        navLinks.style.display = "none";
    }

    burger.addEventListener("click", () => {
        if (navLinks.style.display === "none" || navLinks.style.display === "") {
            headerBurger.style.height = "400px";
            navLinks.style.display = "flex";
        } else {
            headerBurger.style.height = "73px";
            navLinks.style.display = "none";
        }
    });

    navClick.forEach(function click(e) {
        e.addEventListener("click", event => {
            headerBurger.style.height = "73px";
            navLinks.style.display = "none";
            removeClass();
            event.target.classList.add("active");
        })
    })
}

function removeClass() {
    for(var i=0; i<navClick.length; i++) {
        navClick[i].classList.remove("active");
    }
}

function activateNavBurgerOnScroll() {
    sectionAll.forEach((section, index) => {
        const top = section.offsetTop - 50;
        const bottom = top + section.clientHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navClick[index].classList.add('active');
        } else {
            navClick[index].classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavBurgerOnScroll);


activateNavBurgerOnScroll();
burgerMenu();




// // JavaScript code to trigger animations when scrolling to the "about-section"
// const skillsSection = document.getElementById('skills');

// function animateSection() {
//     const sectionTop = skillsSection.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;

//     // When the top of the section is within the viewport
//     if (sectionTop < windowHeight) {
//         let progress = document.querySelectorAll(".progress-line")
//         for(var i=0; i<progress.length; i++) {
//             progress[i].classList.add('animate'); // Add a CSS class to trigger animations
//         }
//     }
// }

// // Attach the scroll event listener
// window.addEventListener('scroll', animateSection);
