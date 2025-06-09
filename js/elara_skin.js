const images = [
    "../image/Image_fx.jpg",
    "../image/paleta(1).jpg",
    "../image/Image_fx(3).jpg",
    "../image/Untitled.png",
    "../image/paleta_cores.jpg"

];

let current = 0;
let sliderInterval;

const sliderImg = document.getElementById('slider-img');
const dotsContainer = document.getElementById('slider-dots');
const sliderSection = document.getElementById('home');

// Criar os dots
images.forEach((_, index) => {
    const dot = document.createElement('span');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        changeSlide(index);
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dots span');

function changeSlide(index) {
    current = index;
    sliderImg.style.opacity = 0;

    setTimeout(() => {
        sliderImg.src = images[current];
        sliderImg.style.opacity = 1;
        updateDots();
    }, 10);
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[current].classList.add('active');
}

function startSlider() {
    sliderInterval = setInterval(() => {
        current = (current + 1) % images.length;
        changeSlide(current);
    }, 5000);
}

function stopSlider() {
    clearInterval(sliderInterval);
}

// Iniciar o slider
startSlider();

// Pausar quando o mouse entra
sliderSection.addEventListener('mouseenter', stopSlider);

// Voltar quando o mouse sai
sliderSection.addEventListener('mouseleave', startSlider);

let slideUp = {
    distance: "50px",
    origin: "top",
    duration: 800,
    easing: "ease-in-out",
    reset: true
}
let slideRight = {
    distance: "50px",
    origin: "right",
    duration: 800,
    easing: "ease-in-out",
    reset: true
}
let slideLeft = {
    distance: "50px",
    origin: "left",
    duration: 800,
    easing: "ease-in-out",
    reset: true
}

ScrollReveal().reveal('#home', slideUp);
ScrollReveal().reveal('.product_content', slideLeft);

// const elementos = document.querySelectorAll('#products');

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('active');
//       } else {
//         entry.target.classList.remove('active'); // ← Esconde quando sair
//       }
//     });
//   }, {
//     threshold: 0.1
//   });

//   elementos.forEach(el => observer.observe(el));

const side_bar = document.querySelector(".side_bar");
const open_menu = document.querySelector(".open_menu");
const close_menu = document.querySelector(".close_menu");

open_menu.addEventListener("click", () => {
    if(!side_bar.classList.contains("active")) {
        side_bar.classList.add("active")
    }
})
close_menu.addEventListener("click", () => {
    if(side_bar.classList.contains("active")) {
        side_bar.classList.remove("active")
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500, // tempo em milissegundos entre slides
        disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // telas >= 0px
        0: {
          slidesPerView: 1,
        },
        320: {
            slidesPerView: 1.6
        },
        400: {
            slidesPerView: 2
        },
        // telas >= 480px
        560: {
          slidesPerView: 3,
        },
        // telas >= 768px
        768: {
          slidesPerView: 4,
        },
        // telas >= 1024px
        1030: {
          slidesPerView: 5,
        },
        // telas >= 1280px
        1400: {
          slidesPerView: 5,
        }
    }
  });