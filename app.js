let sidebar = document.getElementById('sidebar')
let menu = document.getElementById('list')
let close_btn = document.getElementById('close-btn')


menu.addEventListener('click', () => {
  sidebar.style.transition = "right 0.4s ease-in-out";
  sidebar.classList.add('show')
})
close_btn.addEventListener('click', () => {
  sidebar.style.transition = "right 0.4s ease-in-out";
  sidebar.classList.remove('show')
})

// slider start


// <!-- Swiper JS -->

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// slider end


// slider-2 end