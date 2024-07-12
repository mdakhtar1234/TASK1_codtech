let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  Login_Form.classList.remove('active');
  Navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {

  searchForm.classList.remove('active');
  shoppingCart.classList.toggle('active');
  Login_Form.classList.remove('active');
  Navbar.classList.remove('active');
}

let Login_Form = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  Login_Form.classList.toggle('active');
  Navbar.classList.remove('active');
}


let Navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  Login_Form.classList.remove('active');
  Navbar.classList.toggle('active');
}



window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  Login_Form.classList.remove('active');
  Navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1020: {
      slidesPerView: 3,

    },
  },
});



var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 800,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    1020: {
      slidesPerView: 3,

    },
  },
});