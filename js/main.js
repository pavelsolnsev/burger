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

// Ajax форма
const form = document.querySelector('.order__form');
const orderPopup = document.querySelector('.order-popup');
const orderPopupButton = document.querySelector('.order-popup__button');
const orderPopupText = document.querySelector('.order-popup__text');

form.addEventListener("order__button", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    comment : form.message.value,
    to: "pavelsolnsev@gmail.com"
  }
  let xhr = new XMLHttpRequest();
  
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(JSON.stringify(data));
  xhr.addEventListener('load', () => {

    if(xhr.status < 400) {
      orderPopupText.innerText = 'Сообщение отправлено';
    } else {
      orderPopupText.innerText = 'Ошибка при отправке';
    }
   
    orderPopup.classList.add('order-popup_active');
    orderPopup.style.display = "block";
   
    blockedScroll();
  });
});

orderPopupButton.addEventListener('click', () => {
  orderPopup.classList.remove('order-popup_active');
  orderPopup.style.display = "none";
  blockedScroll();
});


// slider 
 $('.owl-carousel').owlCarousel({
       loop: true,
        nav: true,
        margin: 0,
        items: 1,
        autoHeight: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        dots: false
})

// yandex maps

ymaps.ready(init);

const placemarks = [
  {
    latitude: 59.96,
    longitude: 30.32,
    hintContent: '<div class="map__hint">Ул. Дивенская д. 15к1</div>',
    balloonContent: '<div class="map__balloon">Лучшие бургеры только у нас !!</div>'
  }, 
  {
    latitude: 59.90,
    longitude: 30.28,
    hintContent: '<div class="map__hint">Ул. Ивана Черных д. 13</div>',
    balloonContent: '<div class="map__balloon">Лучшие бургеры только у нас !!</div>'
  }, 
  {
    latitude: 59.91,
    longitude: 30.40,
    hintContent: '<div class="map__hint">Ул. Хрустальная д. 11</div>',
    balloonContent: '<div class="map__balloon">Лучшие бургеры только у нас !!</div>'
  }, 
  {
    latitude: 59.94,
    longitude: 30.26,
    hintContent: '<div class="map__hint">Средний проспект В.О. д. 77в</div>',
    balloonContent: '<div class="map__balloon">Лучшие бургеры только у нас !!</div>'
  }
];

function init() {
  var map = new ymaps.Map('map', {
    center: [59.92, 30.30],
    zoom: 12,
    controls: [],
    behaviors: ['drag']
  });

  for(let obj of placemarks) {
    let placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hintContent: obj.hintContent,
      balloonContent: obj.balloonContent
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57]
    });

    map.geoObjects.add(placemark);
  }
}


//player

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    width: "660",
    height: "405",
    videoId: "gsMckzBclAs",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  const duration = player.getDuration();
  let interval;
  updateTimerDisplay();

  $(".player").removeClass("hidden");

  clearInterval(interval);

  interval = setInterval(() => {
    const completed = player.getCurrentTime();
    const percents = (completed / duration) * 100;

    changeButtonPosition(percents);

    updateTimerDisplay();
  }, 1000);
}

function onPlayerStateChange(event) {
  const playerButton = $(".player__start");
  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("active");
      playerButton.addClass("paused");
      break;
    case 2: 
      playerButton.removeClass("paused");
      break;
  }
}

$(".player__start").on("click", e => {
  const playerStatus = player.getPlayerState();

  if (playerStatus !== 1) {
    player.playVideo();
  } else {
    player.pauseVideo();
  }
});


$(".player__playback").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercents = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

  changeButtonPosition(clickedPercents);
  player.seekTo(newPlayerTime);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

function changeButtonPosition(percents) {
  $(".player__playback-button").css({
    left: `${percents}%`
  });
}

function updateTimerDisplay() {
  $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
  $(".player__duration-estimate").text(formatTime(player.getDuration()));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes = Math.floor(roundTime / 60);
  const seconds = roundTime - minutes * 60;
  const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formatedSeconds;
}

 

// onePageScroll

const sections = document.querySelectorAll('.section');
const wrapper = document.querySelector('.maincontent');
let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

body.addEventListener('wheel', (e) => {

  // Если открыты различные оверлеи - блочим обработку события
  if(body.classList.contains('blocked-scroll')) return;

  const direction = getDirection(e);
  const sectionIndex = getScrollIndex(direction);

  scrollToSection(sectionIndex);

});

function getScrollIndex(direction) {
  
 // Определяем index текущей секции
 const currentSectionIndex = getSectionIndex();

 let sectionIndex;

 // Если произощел скролл вниз
 if(direction === "down") {
    sectionIndex = currentSectionIndex + 1;

    if(sectionIndex >= sections.length) {
     return false;
    }
 }

 // Если произощел скролл вниз
 if(direction === "up") {
  sectionIndex = currentSectionIndex - 1;

  if(!currentSectionIndex) {
    return false;
  }
 }

  return sectionIndex;
}

body.addEventListener('click', (e) => {

  if(e.target.hasAttribute('data-index-scroll')) {
    e.preventDefault();
    e.stopPropagation();
    const sectionIndex = e.target.getAttribute('data-index-scroll');

    if(e.target.classList.contains('menu-modal__link')) {
      closeMobileMenu.click();
    }
    
    scrollToSection(sectionIndex);
  }
});

const arrowDown = document.querySelector('.down-arrow');
arrowDown.addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection(1);
});


// Функция определяет направление прокрутки колеса мыши
function getDirection(element) {
  let direction;

  if(element.deltaY > 0) { // Прокрутка вниз
    direction = "down";
  }
 
  if(element.deltaY < 0) { // Прокрутка вверх
   direction = "up";
  }

  return direction;
}

// Функция определяет текущий индекс показанной секции
function getSectionIndex() {
  
  for(let i = 0; i < sections.length; i++) {
    if(sections[i].classList.contains('section_active')) {
      return i;
    }
  }

}

// Функция скрола к следующему или предыдущему элементу
function scrollToSection(index) {

  if(index === false) return;

  const pagination = document.querySelectorAll('.fixed-menu__item');

  // Скролим к секции
  if(inScroll) return;

  inScroll = true;

  for(let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('section_active');
  }
  
  const step = 100;
  wrapper.style.transform = "translateY(-"+ index * step +"%)";
  sections[index].classList.add('section_active');

  for(let i = 0; i < pagination.length; i++) {
    pagination[i].classList.remove('fixed-menu__item_active');
  }

  pagination[index].classList.add('fixed-menu__item_active');
  
  setTimeout(() => {
    inScroll = false;
  }, 700);

}

if (isMobile) {
  wrapper.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });

  $(wrapper).swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      const scrollDirection = direction === 'down' ? 'up' : 'down';

      const sectionIndex = getScrollIndex(scrollDirection);
      scrollToSection(sectionIndex);
    }
  });
}
