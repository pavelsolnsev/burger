// menu accordeon 
const acco = document.querySelector('.menu');
const accoItem = document.querySelectorAll('.menu-acco__item');

acco.addEventListener('click', function(e) {
  for (let i = 0; i < accoItem.length; i++) {
    accoItem[i].classList.remove('menu-acco__item_active');
  }
})

for (let i = 0; i < accoItem.length; i++) {
  accoItem[i].addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (accoItem[i].classList.contains('menu-acco__item_active')) {
      accoItem[i].classList.remove('menu-acco__item_active');
     
    } else {
      for (let i = 0; i < accoItem.length; i++) {
        accoItem[i].classList.remove('menu-acco__item_active');
     
      }
      accoItem[i].classList.add('menu-acco__item_active');
    }
  })
}

// team accordeon
const accoV = document.querySelector('.team');
const accovItem = document.querySelectorAll('.team-acco__item');

accoV.addEventListener('click', function(e) {
  for (let i = 0; i < accovItem.length; i++) {
    accovItem[i].classList.remove('team-acco__item_active');
  }
})

for (let i = 0; i < accovItem.length; i++) {
  accovItem[i].addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (accovItem[i].classList.contains('team-acco__item_active')) {
      accovItem[i].classList.remove('team-acco__item_active');
     
    } else {
      for (let i = 0; i < accovItem.length; i++) {
        accovItem[i].classList.remove('team-acco__item_active');
     
      }
      accovItem[i].classList.add('team-acco__item_active');
    }
  })
}


// Modal window
const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger-menu');
const closeMobileMenu = document.querySelector('#menu-modal__close');
const mobileMenu = document.querySelector('#menu-modal');

function blockedScroll() {
  if(body.classList.contains('blocked-scroll')) {
    body.classList.remove('blocked-scroll');
  } else {
    body.classList.add('blocked-scroll');
  }
}

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem, "") : elem.currentStyle;
}

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('menu-modal_active');
  blockedScroll();
  
});

closeMobileMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('menu-modal_active');
  blockedScroll();
});


// popup reviews
const reviews = document.querySelector('.review__list');
const reviewsPopupBlock = document.querySelector('.reviews-popup');
const reviewsPopupName = document.querySelector('.reviews-popup__title');
const reviewsPopupText = document.querySelector('.reviews-popup__shorttext');
const reviewsPopupClose = document.querySelector('.reviews-popup__close');


reviews.addEventListener('click', (e) => {
  const element = e.target;
  if(element.classList.contains('review__view')) {
    const elemText = element.previousElementSibling.innerText;
    const elemName = element.previousElementSibling.previousElementSibling.innerText;

    reviewsPopupName.innerText = elemName;
    reviewsPopupText.innerText = elemText;

    reviewsPopupBlock.classList.add("reviews-popup_active");
    reviewsPopupBlock.style.display = 'block';
    blockedScroll();
  }
});

reviewsPopupClose.addEventListener('click', () => {
  reviewsPopupBlock.classList.remove("reviews-popup_active");
  reviewsPopupBlock.style.display = "none";
  blockedScroll();
});

document.addEventListener('keyup', (e) => {
  if(reviewsPopupBlock.classList.contains('reviews-popup_active') && e.keyCode === 27) {
    reviewsPopupClose.click();
  }  
});
