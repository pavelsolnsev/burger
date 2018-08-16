// menu accordeon 
const acco = document.querySelector('.menu');
const accoItem = document.querySelectorAll('.menu-acco__item');


acco.addEventListener('click', function(e) {
  for (let i = 0; i < accoItem.length; i++) {
    accoItem[i].classList.remove('menu-acco__item_active');
    //
  }
})

for (let i = 0; i < accoItem.length; i++) {
  accoItem[i].addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (accoItem[i].classList.contains('menu-acco__item_active')) {
      accoItem[i].classList.remove('menu-acco__item_active');
      //
    } else {
      for (let i = 0; i < accoItem.length; i++) {
        accoItem[i].classList.remove('menu-acco__item_active');
        //
      }
      accoItem[i].classList.add('menu-acco__item_active')
      //
    }
  })
}

//calculateWith()
// ширину окна
// ширину accoItem
// return reqWidth ширина окна - (ширина accoItem * accoItem.length)
//.menu-acco__content
// elem.style.width = reqWidth + 'px'