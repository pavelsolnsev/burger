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
      accoItem[i].classList.add('menu-acco__item_active')
   
    }
  })
}

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
