
! function(...args){
    for(let value of args){
      value()
    }
}(
  function elemSumm(){
    const items = document.querySelectorAll('.items .items__item')
    const divPrice = document.querySelector('.value')
    for (let itemElement of items){
      itemElement.onclick = function (){
        this.classList.toggle('item-active')
        calcPrice()
      }
    }
    function calcPrice() {
      let sum = 0
      for(let value of items){
        value.classList.contains('item-active') ? sum += parseInt(value.getAttribute('data-price')) : ''
      }
      divPrice.innerHTML = sum
    }
  },
  function loger(){
    console.log('it works good enough =P')
  }
);
  

  